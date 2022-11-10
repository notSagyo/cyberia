import {
  IMangaChapterPage,
  IMangaInfo,
} from '@consumet/extensions/dist/models';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '/components/Layout/Layout';
import Anchor from '/components/utils/Anchor/Anchor';
import { mangaProvider } from '/services/consumet-service';
import styles from '/styles/pages/manga.module.scss';
import {
  corsProxy,
  getMangaInfoURL,
  getMangaReadURL,
  mangaURL,
} from '/utils/urls';

const MangaPage = () => {
  const [chapterPages, setChapterPages] = useState<IMangaChapterPage[]>([]);
  const [mangaInfo, setMangaInfo] = useState<IMangaInfo>();
  const query = useRouter().query;
  const router = useRouter();

  // Manga info
  const mangaId = String(query.mangaId || '');
  const chapterId = String(query.chapterId || '');
  const pageNumber = Number(query.pageNumber || 1);
  const chapterLength = chapterPages?.length || 0;
  const imageUrl = corsProxy + chapterPages?.[pageNumber - 1]?.img || '';
  const nextImageUrl = corsProxy + chapterPages?.[pageNumber]?.img || '';

  // Adjacent pages
  const nextPageUrl =
    Number(pageNumber) < chapterLength
      ? `${mangaURL}/${mangaId}/${chapterId}/${pageNumber + 1}`
      : null;
  const prevPageUrl =
    pageNumber > 1
      ? `${mangaURL}/${mangaId}/${chapterId}/${pageNumber - 1}`
      : null;

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
    chapterId &&
      fetch(`${getMangaReadURL(mangaProvider)}/${chapterId}`)
        .then((data) => data.json())
        .then((chapterPages) => setChapterPages(chapterPages));
  }, [chapterId]);

  // On manga change fetch manga info
  useEffect(() => {
    mangaId &&
      fetch(`${getMangaInfoURL(mangaProvider)}/${mangaId}`)
        .then((data) => data.json())
        .then((mangaInfo) => setMangaInfo(mangaInfo));
  }, [mangaId]);

  // On page change scroll to top
  useEffect(() => {
    const scrollTarget = document.getElementById('scrollTarget');
    scrollTarget && scrollTarget.scrollTo({ behavior: 'smooth', top: 0 });
  }, [chapterId, pageNumber]);

  // On key down try to change page/chapter
  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === 'arrowleft' || key === 'a') {
        if (prevPageUrl) router.push(prevPageUrl);
        else if (prevChapterUrl) router.push(prevChapterUrl);
      } else if (key === 'arrowright' || key === 'd') {
        if (nextPageUrl) router.push(nextPageUrl);
        else if (nextChapterUrl) router.push(nextChapterUrl);
      }
    };
    document.addEventListener('keydown', keyDownHandler);
    return () => document.removeEventListener('keydown', keyDownHandler);
  }, [nextChapterUrl, nextPageUrl, prevChapterUrl, prevPageUrl, router]);

  return (
    <Layout className="bgSpace" bodyProps={{ id: 'scrollTarget' }}>
      {/* PAGE */}
      <Link
        href={nextPageUrl ? nextPageUrl : nextChapterUrl ? nextChapterUrl : '#'}
        tabIndex={0}
        legacyBehavior
      >
        <div className={cn(styles.pageContainer, 'pointer')}>
          <img className={styles.pageImage} src={imageUrl} alt={'manga page'} />
        </div>
      </Link>

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
        {prevPageUrl && (
          <Anchor href={prevPageUrl}>
            <img
              src="/img/arrow-yellow-left.gif"
              alt="previous page"
              width={64}
            />
          </Anchor>
        )}
        {/* NEXT PAGE */}
        {nextPageUrl && (
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
      {nextPageUrl && (
        <img
          className={styles.nextPageImage}
          src={nextImageUrl}
          alt={'hidden'}
        />
      )}
    </Layout>
  );
};

export default MangaPage;
