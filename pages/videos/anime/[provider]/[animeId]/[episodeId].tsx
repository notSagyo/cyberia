import {
  IAnimeInfo,
  ISource,
  ISubtitle,
} from '@consumet/extensions/dist/models';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AnimeVideoJS from '/components/AnimeVideo/AnimeVideoJS';
import Layout from '/components/Layout/Layout';
import LinkHeading from '/components/LinkHeading/LinkHeading';
import Anchor from '/components/utils/Anchor/Anchor';
import animes from '/data/animes';
import animeService from '/services/anime-service';
import { AnimeProvidersNames } from '/services/consumet-service';
import styles from '/styles/pages/anime.module.scss';
import { animeURL, getAnimeEpisodeURL } from '/utils/urls';

const EpisodePage: NextPage = () => {
  const router = useRouter();
  const {
    provider,
    animeId,
    animeInfo,
    episodeId,
    episodeUrl,
    nextEpisodeUrl,
    prevEpisodeUrl,
    source,
    subtitles,
  } = useEpisode();

  return (
    <Layout title={`${animeId}/${episodeId}`}>
      {/* HEADING */}
      <LinkHeading href={`${animeURL}/${provider}/${animeId}`} goBack>
        {`${animeURL}/${animeId}/${episodeId}`}
      </LinkHeading>

      {/* VIDEO */}
      <AnimeVideoJS
        url={episodeUrl}
        videoTitle={`${animeId}-${episodeId}.mp4`}
        sources={source.sources}
        tracks={subtitles}
        shellProps={{ className: styles.videoShell }}
      />

      {/* CONTROLS, show only after episode is loaded */}
      {episodeUrl && (
        <>
          {/* EPISODE SELECT */}
          {animeInfo && (
            <div className={styles.selectContainer}>
              <select
                defaultValue={'episode'}
                onChange={(e) =>
                  router.push(
                    getAnimeEpisodeURL(provider, animeId, e.target.value)
                  )
                }
              >
                <option value="episode" disabled>
                  episode
                </option>
                {animeInfo.episodes?.map((_, i) => (
                  <option value={i + 1} key={i}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* ARROWS */}
          <div className={styles.arrowsContainer}>
            {prevEpisodeUrl && episodeUrl && (
              <Anchor href={prevEpisodeUrl}>
                <img
                  src="/img/arrow-yellow-left.gif"
                  alt="previous page"
                  width={64}
                />
              </Anchor>
            )}
            {nextEpisodeUrl && episodeUrl && (
              <Anchor href={nextEpisodeUrl}>
                <img
                  src="/img/arrow-yellow-right.gif"
                  alt="previous page"
                  width={64}
                />
              </Anchor>
            )}
          </div>
        </>
      )}
    </Layout>
  );
};

const useEpisode = () => {
  const [animeInfo, setAnimeInfo] = useState<IAnimeInfo>();
  const [source, setSource] = useState<ISource>({ sources: [] });
  const [episodeUrl, setEpisodeUrl] = useState<string>('');
  const [subtitles, setSubtitles] = useState<ISubtitle[]>([]);
  const { animeId, episodeId, provider } = useRouter().query as {
    animeId: string;
    episodeId: string;
    provider: AnimeProvidersNames;
  };
  const remoteId = animes[provider]?.find((anime) => anime.localId)?.remoteId;

  // Episode navigation
  const episodeCount = animeInfo?.totalEpisodes || 1;
  const prevEpisodeUrl =
    animeInfo &&
    parseInt(episodeId) - 1 > 0 &&
    getAnimeEpisodeURL(provider, animeInfo.id, String(parseInt(episodeId) - 1));
  const nextEpisodeUrl =
    animeInfo &&
    parseInt(episodeId) + 1 < episodeCount &&
    getAnimeEpisodeURL(provider, animeInfo.id, String(parseInt(episodeId) + 1));

  // Fetch anime and episode data
  useEffect(() => {
    if (!remoteId || !episodeId || !provider) return;
    (async () => {
      try {
        // Set empty to ensure reload
        setSource({ sources: [] });
        setEpisodeUrl('');

        // Fetch data
        const info =
          animeInfo ?? (await animeService.fetchInfo(remoteId, provider));
        const sources = await animeService.fetchSources(
          info?.episodes?.[parseInt(episodeId) - 1].id || '',
          provider
        );
        if (!info || !sources) throw new Error('Error fetching data');
        const url = sources.sources.find(
          (src) => src.quality === 'auto' || src.quality === 'default'
        )?.url;

        // Set new values
        setAnimeInfo(info);
        setSource(sources);
        setEpisodeUrl(url || sources.sources?.[0].url || '');
        sources.subtitles && setSubtitles(sources.subtitles);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [remoteId, animeInfo, episodeId, provider]);

  return {
    provider,
    animeId,
    animeInfo,
    episodeId,
    episodeUrl,
    episodeCount,
    prevEpisodeUrl,
    nextEpisodeUrl,
    source,
    subtitles,
  };
};

export default EpisodePage;
