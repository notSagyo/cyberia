import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import mangasData from '../../../../../data/mangas';
import {
  getChapterPages,
  getMangaInfo,
} from '../../../../../services/manga-service';

interface MangaProps {
  mangaId: string;
  chapterId: string;
  chapterLength: number;
  pageNumber: number;
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
}: MangaProps) => {
  // XXX: DEBUG
  console.log('\nManga ID:', mangaId);
  console.log('Chapter ID:', chapterId);
  console.log('Chapter length:', chapterLength);
  console.log('Chapter page:', pageNumber);
  console.log('Page image url:', imageUrl);

  return <img src={imageUrl} />;
};

export const getStaticProps: GetStaticProps<MangaProps> = async (context) => {
  const { pageNumber, mangaId, chapterId } = context.params as iQueryParams;
  const chapterPages = await getChapterPages(chapterId);
  const chapterLength = chapterPages?.length || 0;
  const imageUrl = chapterPages?.[parseInt(pageNumber) - 1]?.img || '';

  return {
    props: {
      mangaId: mangaId || 'MANGA_ID',
      chapterId: chapterId || 'CHAPTER_ID',
      pageNumber: parseInt(pageNumber) || 0,
      chapterLength,
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
    chaptersIds: MangadexChapter[];
  }[] = [];

  // Wait until all mangas' chapter are loaded
  const infoPromises: Promise<unknown>[] = [];

  mangasIds.forEach((mangaId) => {
    const promise = getMangaInfo(mangaId).then((mangaInfo) => {
      mangaInfo &&
        mangasWithChapters.push({
          mangaId: mangaId,
          chaptersIds: mangaInfo.chapters,
        });
    });

    infoPromises.push(promise);
  });

  await Promise.all(infoPromises);

  // Repeat each path for every page of every chapter
  mangasWithChapters.forEach((mangaWithChapters) => {
    mangaWithChapters.chaptersIds.forEach((chapter) => {
      if (!chapter) return;
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
