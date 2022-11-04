import {
  IAnimeInfo,
  ISource,
  ISubtitle,
} from '@consumet/extensions/dist/models';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AnimeVideo from '/components/AnimeVideo/AnimeVideo';
import ArtPlayer from '/components/ArtPlayer/ArtPlayer';
import Layout from '/components/Layout/Layout';
import LinkHeading from '/components/LinkHeading/LinkHeading';
import Anchor from '/components/utils/Anchor/Anchor';
import styles from '/styles/pages/anime.module.scss';
import { animeInfoURL, animeSourcesURL, animeURL } from '/utils/urls';

const fetchAnimeInfo = async (animeId: string): Promise<IAnimeInfo> => {
  return fetch(`${animeInfoURL}/${animeId}`).then((res) => res.json());
};

const fetchSources = async (episodeId: string): Promise<ISource> => {
  return fetch(`${animeSourcesURL}/${episodeId}`).then((res) => res.json());
};

const EpisodePage: NextPage = () => {
  const { animeId, episode } = useRouter().query as Record<string, string>;
  const [animeInfo, setAnimeInfo] = useState<IAnimeInfo>();
  const [episodeSources, setEpisodeSources] = useState<ISource>();
  const [episodeUrl, setEpisodeUrl] = useState<string>('');
  const [subtitles, setSubtitles] = useState<ISubtitle[]>([]);

  const episodeCount = animeInfo?.totalEpisodes || 1;
  const prevEpisodeUrl =
    animeInfo &&
    parseInt(episode) - 1 > 0 &&
    `${animeURL}/${animeInfo.id}/${parseInt(episode) - 1}`;
  const nextEpisodeUrl =
    animeInfo &&
    parseInt(episode) + 1 < episodeCount &&
    `${animeURL}/${animeInfo.id}/${parseInt(episode) + 1}`;

  useEffect(() => {
    setEpisodeSources(undefined);
    (async () => {
      try {
        const info = await fetchAnimeInfo(animeId);
        const sources = await fetchSources(
          info?.episodes?.[parseInt(episode) - 1].id || ''
        );
        if (!info || !sources) throw new Error('Error fetching data');
        const url = sources.sources.find((src) => src.quality === 'auto')?.url;
        setAnimeInfo(info);
        setEpisodeSources(sources);
        setEpisodeUrl(url || sources.sources?.[0].url || '');
        sources.subtitles && setSubtitles(sources.subtitles);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [animeId, episode]);

  return (
    <Layout title={`${animeId}/${episode}`}>
      <LinkHeading
        href={`${animeURL}/${animeId}`}
        goBack
      >{`${animeURL}/${animeId}/${episode}`}</LinkHeading>

      {/* VIDEO */}
      <AnimeVideo
        videoTitle={`${animeId}-${episode}.mp4`}
        className={styles.videoShell}
      >
        {episodeSources && (
          <ArtPlayer
            url={episodeUrl}
            className={styles.videoPlayer}
            quality={episodeSources.sources.map((s) => ({
              default: s.quality === 'auto',
              url: s.url,
              html: s.quality || 'unknown',
            }))}
            subtitles={subtitles || []}
          />
        )}
      </AnimeVideo>

      {/* ARROWS */}
      <div className={styles.arrowsContainer}>
        {prevEpisodeUrl && (
          <Anchor href={prevEpisodeUrl}>
            <img
              src="/img/arrow-yellow-left.gif"
              alt="previous page"
              width={64}
            />
          </Anchor>
        )}
        {nextEpisodeUrl && (
          <Anchor href={nextEpisodeUrl}>
            <img
              src="/img/arrow-yellow-right.gif"
              alt="previous page"
              width={64}
            />
          </Anchor>
        )}
      </div>
    </Layout>
  );
};

export default EpisodePage;
