import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import Layout from '../../../../../components/layout';
import mangasData from '../../../../../data/mangas';
import {
  apiCache,
  getChapterPages,
  getMangaInfo,
} from '../../../../../services/manga-service';
import styles from '/styles/manga.module.scss';

interface MangaProps {
  mangaId: string;
  chapterId: string;
  chapterLength: number;
  pageNumber: number;
  hasNextPage: boolean;
  imageUrl: string;
}

interface iQueryParams extends ParsedUrlQuery {
  mangaId: string;
  chapterId: string;
  pageNumber: string;
}

const Manga = ({
  mangaId,
  chapterId,
  chapterLength,
  pageNumber,
  imageUrl,
  hasNextPage,
}: MangaProps) => {
  // XXX: DEBUG
  console.log('\nManga ID:', mangaId);
  console.log('Chapter ID:', chapterId);
  console.log('Chapter length:', chapterLength);
  console.log('Chapter page:', pageNumber);
  console.log('Page image url:', imageUrl);

  const router = useRouter();
  const nextPageUrl =
    router.pathname.split('/').slice(0, -1).join('/') + `/${pageNumber + 1}`;

  return (
    <Layout>
      <div className={styles.pageContainer}>
        <img className={styles.pageImage} src={imageUrl} alt={'manga page'} />
      </div>
      {hasNextPage && <Link href={nextPageUrl}>NEXT PAGE</Link>}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<MangaProps> = async (context) => {
  const { pageNumber, mangaId, chapterId } = context.params as iQueryParams;
  const chapterPages = await getChapterPages(chapterId);
  const chapterLength = chapterPages?.length || 0;
  const hasNextPage = Number(pageNumber) < chapterLength;
  const imageUrl = chapterPages?.[parseInt(pageNumber) - 1]?.img || '';

  return {
    props: {
      mangaId: mangaId || 'MANGA_ID',
      chapterId: chapterId || 'CHAPTER_ID',
      pageNumber: parseInt(pageNumber) || 0,
      chapterLength,
      hasNextPage,
      imageUrl,
    },
  };
};

/* paths should look like = [
  { params: { mangaId: 'a', chapterId: 'ch1', pageNumber: 1 } },
  { params: { mangaId: 'a', chapterId: 'ch2', pageNumber: 1 } },
  { params: { mangaId: 'b', chapterId: 'ch1', pageNumber: 1 } },
  { params: { mangaId: 'b', chapterId: 'ch1', pageNumber: 2 } },
  { params: { mangaId: 'c', chapterId: 'ch1', pageNumber: 1 } },
]; */
export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: iQueryParams }[] = [];

  let mangasIds: string[] = mangasData.map((manga) => manga.id);
  let mangasWithChapters: {
    mangaId: string;
    chapters: MangadexChapter[];
  }[] = [];

  // Wait until all mangas' chapter are loaded
  const infoPromises: Promise<unknown>[] = [];

  mangasIds.forEach((mangaId) => {
    const promise = getMangaInfo(mangaId).then((mangaInfo) => {
      mangaInfo &&
        mangasWithChapters.push({
          mangaId: mangaId,
          chapters: mangaInfo.chapters,
        });
    });

    infoPromises.push(promise);
  });

  await Promise.all(infoPromises);

  // Repeat each path for every page of every chapter
  mangasWithChapters.forEach((mangaWithChapters) => {
    mangaWithChapters.chapters.forEach((chapter) => {
      if (!chapter) return;
      // Cache manga chapters pages
      const hasCache = apiCache.hasCache(chapter.id);
      !hasCache &&
        getChapterPages(chapter.id).then(
          (pages) => pages && apiCache.setChaptersPages(chapter.id, pages)
        );

      for (let i = 0; i < chapter.pages; i++) {
        paths.push({
          params: {
            mangaId: mangaWithChapters.mangaId,
            chapterId: chapter.id,
            pageNumber: String(i + 1),
          },
        });
      }
    });
  });

  return { fallback: false, paths };
};

export default Manga;
