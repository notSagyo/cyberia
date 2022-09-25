import { IAnimeInfo } from '@consumet/extensions/dist/models';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import AnimeVideo from '../../../../components/AnimeVideo/AnimeVideo';
import Layout from '../../../../components/Layout/Layout';
import LinkHeading from '../../../../components/LinkHeading/LinkHeading';
import Anchor from '../../../../components/utils/Anchor/Anchor';
import animesData from '../../../../data/animes';
import { gogoanime } from '../../../../services/anime-service';
import { animeURL } from '../../../../utils/urls';
import styles from '/styles/pages/anime.module.scss';

interface EpisodeProps {
  animeInfo: IAnimeInfo;
  episodeUrl: string;
  episodeNumber: number;
}

interface iQueryParams extends ParsedUrlQuery {
  animeId: string;
  episode: string;
}

const EpisodePage = ({
  episodeUrl,
  episodeNumber,
  animeInfo,
}: EpisodeProps) => {
  const episodeCount = animeInfo?.totalEpisodes || 1;
  const prevEpisodeUrl =
    episodeNumber - 1 > 0 && `${animeURL}/${animeInfo.id}/${episodeNumber - 1}`;
  const nextEpisodeUrl =
    episodeNumber + 1 < episodeCount &&
    `${animeURL}/${animeInfo.id}/${episodeNumber + 1}`;

  return (
    <Layout title={animeInfo.id}>
      <LinkHeading href={`${animeURL}/${animeInfo.id}`} goBack />
      {/* VIDEO */}
      <AnimeVideo
        className={styles.video}
        videoTitle={`${animeInfo.id.replaceAll('-', '_')}_${episodeNumber
          .toString()
          .padStart(2, '0')}.mp4`}
        episodeUrl={episodeUrl || ''}
      />
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

export const getStaticProps: GetStaticProps<EpisodeProps> = async (context) => {
  const { episode, animeId } = context.params as iQueryParams;
  const animeInfo = await gogoanime.fetchAnimeInfo(animeId);
  const episodeServers = await gogoanime.fetchEpisodeServers(
    `${animeId}-episode-${episode}`
  );
  const episodeUrl = episodeServers[0].url;

  return {
    props: {
      episodeUrl: episodeUrl || '',
      episodeNumber: parseInt(episode),
      animeInfo,
    },
  };
};

export const getStaticPaths: GetStaticPaths<iQueryParams> = async () => {
  let animes: { animeId: string; length: number }[] = [];

  // Get episode info for all animes in data/animes.ts
  const promises: Promise<IAnimeInfo>[] = [];
  for (let i = 0; i < animesData.length; i++)
    promises.push(gogoanime.fetchAnimeInfo(animesData[i].id));

  // When all promises resolve, assign animes array with animes data
  await Promise.allSettled(promises).then((results) => {
    results.forEach(
      (settled: PromiseSettledResult<IAnimeInfo>, i) =>
        settled.status === 'fulfilled' &&
        animes.push({
          animeId: animesData[i].id,
          length: settled.value.episodes?.length || 1,
        })
    );
  });

  // For each anime in animes array, create a path for each episode
  let paths: { params: iQueryParams }[] = [];
  animes.forEach((anime) => {
    for (let i = 1; i <= anime.length; i++)
      paths.push({ params: { animeId: anime.animeId, episode: i.toString() } });
  });

  return { paths, fallback: false };
};

export default EpisodePage;
