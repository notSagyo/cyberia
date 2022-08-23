import { IAnimeInfo } from '@consumet/extensions/dist/models';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import AnimeVideo from '../../../../components/anime-video';
import Layout from '../../../../components/layout';
import animesData from '../../../../data/animes';
import { gogoanime } from '../../../../services/anime-service';

interface EpisodeProps {
  animeId: string;
  episodeUrl: string;
  episodeNumber: string | number;
}

interface iQueryParams extends ParsedUrlQuery {
  animeId: string;
  episode: string;
}

// !TODO: Add support for next episode buttons
const Episode = ({ animeId, episodeUrl, episodeNumber }: EpisodeProps) => {
  // !TODO: change title
  return (
    <Layout title="Videos">
      <h1 className="h1">VIDEOS</h1>
      <AnimeVideo
        videoTitle={`${animeId.replaceAll('-', '_')}_${episodeNumber
          .toString()
          .padStart(2, '0')}.mp4`}
        episodeUrl={episodeUrl || ''}
      />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<EpisodeProps> = async (context) => {
  const { episode, animeId } = context.params as iQueryParams;
  const episodeServers = await gogoanime.fetchEpisodeServers(
    `${animeId}-episode-${episode}`
  );
  const episodeUrl = episodeServers[0].url;

  return {
    props: {
      animeId: animeId || 'ANIME_VISUALIZER',
      episodeUrl: episodeUrl || '',
      episodeNumber: episode,
    },
  };
};

export const getStaticPaths: GetStaticPaths<iQueryParams> = async () => {
  let animes: { animeId: string; length: number }[] = [];

  // Get episode info for all animes in data/animes.ts
  const promises: Promise<IAnimeInfo>[] = [];
  for (let i = 0; i < animesData.length; i++) {
    promises.push(gogoanime.fetchAnimeInfo(animesData[i].id));
  }

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

export default Episode;
