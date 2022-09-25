import {
  IMangaChapterPage,
  IMangaInfo,
} from '@consumet/extensions/dist/models';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Anchor from '../../../../../components/utils/Anchor/Anchor';
import Layout from '../../../../../components/Layout/Layout';
import { mangadex } from '../../../../../services/manga-service';
import { mangaURL } from '../../../../../utils/urls';
import styles from '/styles/pages/manga.module.scss';
import cn from 'classnames';

const MangaPage = () => {
  const [chapterPages, setChapterPages] = useState<IMangaChapterPage[]>([]);
  const [mangaInfo, setMangaInfo] = useState<IMangaInfo>();
  const query = useRouter().query;

  // Manga info
  const mangaId = String(query.mangaId || '');
  const chapterId = String(query.chapterId || '');
  const pageNumber = Number(query.pageNumber || 0);
  const chapterLength = chapterPages?.length || 0;
  const imageUrl = chapterPages?.[parseInt(String(pageNumber)) - 1]?.img || '';

  // Adjacent pages
  const hasNextPage = Number(pageNumber) < chapterLength;
  const nextPageUrl = `${mangaURL}/${mangaId}/${chapterId}/${pageNumber + 1}`;
  const prevPageUrl = `${mangaURL}/${mangaId}/${chapterId}/${pageNumber - 1}`;

  // Adjacent chapters
  const chapterIndex = mangaInfo?.chapters?.findIndex((c) => c.id == chapterId);
  const nextChapter =
    chapterIndex != null ? mangaInfo?.chapters?.[chapterIndex - 1]?.id : null;
  const prevChapter =
    chapterIndex != null ? mangaInfo?.chapters?.[chapterIndex + 1]?.id : null;
  const nextChapterUrl =
    nextChapter && `${mangaURL}/${mangaId}/${nextChapter}/1`;
  const prevChapterUrl =
    prevChapter && `${mangaURL}/${mangaId}/${prevChapter}/1`;

  // On chapter change fetch chapter pages
  useEffect(() => {
    if (chapterId)
      mangadex
        .fetchChapterPages(chapterId)
        .then((pages) => setChapterPages(pages));
    if (mangaId)
      mangadex.fetchMangaInfo(mangaId).then((info) => setMangaInfo(info));
  }, [chapterId, mangaId]);

  // On page change scroll to top
  useEffect(() => {
    const scrollTarget = document.getElementById('scrollTarget');
    scrollTarget && scrollTarget.scrollTo({ behavior: 'smooth', top: 0 });
  }, [chapterId, pageNumber]);

  return (
    <Layout className="bgSpace" bodyProps={{ id: 'scrollTarget' }}>
      {/* PAGE */}
      <div className={styles.pageContainer}>
        <Link
          href={
            hasNextPage ? nextPageUrl : nextChapterUrl ? nextChapterUrl : '#'
          }
        >
          <img
            className={cn(styles.pageImage, 'pointer')}
            src={imageUrl}
            alt={'manga page'}
          />
        </Link>
      </div>

      {/* CONTROLS */}
      <div className={styles.controlsContainer}>
        {/* PREV CHAPTER */}
        {prevChapterUrl && (
          <Anchor href={prevChapterUrl}>
            <img
              src="/img/arrow-blue-left.gif"
              alt="previous chapter"
              width={64}
            />
          </Anchor>
        )}
        {/* PREV PAGE */}
        {pageNumber > 1 && (
          <Anchor href={prevPageUrl}>
            <img
              src="/img/arrow-yellow-left.gif"
              alt="previous page"
              width={64}
            />
          </Anchor>
        )}
        {/* NEXT PAGE */}
        {hasNextPage && (
          <Anchor href={nextPageUrl}>
            <img src="/img/arrow-yellow-right.gif" alt="next page" width={64} />
          </Anchor>
        )}
        {/* NEXTCHAPTER */}
        {nextChapterUrl && (
          <Anchor href={nextChapterUrl}>
            <img
              src="/img/arrow-blue-right.gif"
              alt="next chapter"
              width={64}
            />
          </Anchor>
        )}
      </div>

      {/* PRELOAD NEXT IMAGE */}
      {hasNextPage && (
        <img
          className={styles.nextPageImage}
          src={chapterPages?.[pageNumber]?.img}
          alt={'hidden'}
        />
      )}
    </Layout>
  );
};

export default MangaPage;
