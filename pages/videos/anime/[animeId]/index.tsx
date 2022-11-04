import { IAnimeInfo } from '@consumet/extensions/dist/models';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Layout from '../../../../components/Layout/Layout';
import LinkHeading from '../../../../components/LinkHeading/LinkHeading';
import LinkList from '../../../../components/LinkList/LinkList';
import animes from '../../../../data/animes';
import { provider } from '../../../../services/anime-service';
import { animeURL } from '../../../../utils/urls';

interface AnimeIdProps {
  animeInfo: IAnimeInfo;
}

interface iQueryParams extends ParsedUrlQuery {
  animeId: string;
}

const AnimeId = ({ animeInfo }: AnimeIdProps) => {
  const animeId = animeInfo.id;
  const episodes = animeInfo.episodes || [];

  const animeName = (() => {
    const anime = animes.find((anime) => anime.id == animeId);
    const name = anime?.title || anime?.id;
    return name;
  })();

  return (
    <Layout title="Videos">
      <LinkHeading href={animeURL}>{`..${animeURL}/${animeName}`}</LinkHeading>
      <LinkList
        links={episodes.map((episode, i) => ({
          title: `${animeURL}/${animeName}/${i + 1}`,
          href: `${animeURL}/${animeId}/${i + 1}`,
          key: episode.id,
        }))}
      />
    </Layout>
  );
};

// Static stuff ==============================================================//
export const getStaticProps: GetStaticProps<AnimeIdProps> = async (context) => {
  const { animeId } = context.params as iQueryParams;
  const animeInfo = await provider.fetchAnimeInfo(animeId);
  return { props: { animeInfo } };
};

export const getStaticPaths: GetStaticPaths<iQueryParams> = async () => {
  const paths = animes.map((anime) => ({ params: { animeId: anime?.id } }));
  return { paths, fallback: false };
};

export default AnimeId;
