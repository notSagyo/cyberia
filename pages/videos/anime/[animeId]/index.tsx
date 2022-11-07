import { IAnimeInfo } from '@consumet/extensions/dist/models';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Layout from '/components/Layout/Layout';
import LinkHeading from '/components/LinkHeading/LinkHeading';
import LinkList from '/components/LinkList/LinkList';
import animes from '/data/animes';
import { animeProviders } from '/services/consumet-service-server';
import { animeURL } from '/utils/urls';
import { toUrlikeString } from '/utils/utils';

interface AnimeIdProps {
  animeInfo: IAnimeInfo;
}

interface iQueryParams extends ParsedUrlQuery {
  animeId: string;
}

const AnimeId = ({ animeInfo }: AnimeIdProps) => {
  const animeId = animeInfo.id;
  const episodes = animeInfo.episodes || [];

  const animeTitle = (() => {
    const anime = animes.default.find((anime) => anime.id == animeId);
    const title = anime?.title || anime?.id;
    return toUrlikeString(title || '');
  })();

  return (
    <Layout title="Videos">
      <LinkHeading href={animeURL}>{`..${animeURL}/${animeTitle}`}</LinkHeading>
      <LinkList
        links={episodes.map((episode, i) => ({
          title: `${animeURL}/${animeTitle}/${i + 1}`,
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
  const animeInfo = await animeProviders.default.fetchAnimeInfo(animeId);
  return { props: { animeInfo } };
};

export const getStaticPaths: GetStaticPaths<iQueryParams> = async () => {
  const paths = animes.default.map((anime) => ({
    params: { animeId: anime?.id },
  }));
  return { paths, fallback: false };
};

export default AnimeId;
