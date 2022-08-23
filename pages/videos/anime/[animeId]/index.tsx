import { IAnimeInfo } from '@consumet/extensions/dist/models';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import Layout from '../../../../components/layout';
import Anchor from '../../../../components/utils/anchor';
import animes from '../../../../data/animes';
import { gogoanime } from '../../../../services/anime-service';
import { animeURL, videosURL } from '../../../../utils/url';

interface AnimeIdProps {
  animeInfo: IAnimeInfo;
}

interface iQueryParams extends ParsedUrlQuery {
  animeId: string;
}

// !TODO: Add support for next episode buttons
const AnimeId = ({ animeInfo }: AnimeIdProps) => {
  const animeId = animeInfo.id;
  const episodes = animeInfo.episodes || [];

  const animeName = animes
    .find((anime) => anime.id == animeId)
    ?.id.toLocaleLowerCase();

  return (
    <Layout title="Videos">
      <Link href={videosURL} passHref>
        <Anchor className="green">
          <h1 className="h2">{`..${animeURL}/${animeName}`}</h1>
        </Anchor>
      </Link>
      {episodes.map((episode, index) => (
        <Link
          href={`${animeURL}/${animeId}/${index + 1}`}
          key={episode.id}
          passHref
        >
          <Anchor>
            <h4 className="h3">{`${animeURL}/${animeId}/${index + 1}`}</h4>
          </Anchor>
        </Link>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<AnimeIdProps> = async (context) => {
  const { animeId } = context.params as iQueryParams;
  const animeInfo = await gogoanime.fetchAnimeInfo(animeId);
  return { props: { animeInfo } };
};

export const getStaticPaths: GetStaticPaths<iQueryParams> = async () => {
  const paths = animes.map((anime) => ({ params: { animeId: anime?.id } }));
  return { paths, fallback: false };
};

export default AnimeId;
