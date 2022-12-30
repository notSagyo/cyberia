import { IAnimeInfo } from '@consumet/extensions/dist/models';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Layout from '/components/Layout/Layout';
import LinkHeading from '/components/LinkHeading/LinkHeading';
import LinkList from '/components/LinkList/LinkList';
import animes from '/data/animes';
import animeService from '/services/anime-service';
import { AnimeProvidersNames } from '/services/consumet-service';
import { animeProviders } from '/services/consumet-service-server';
import { animeURL } from '/utils/urls';

interface AnimeIdProps {
  animeId: string;
  animeInfo: IAnimeInfo;
  provider: AnimeProvidersNames;
}

interface iQueryParams extends ParsedUrlQuery {
  animeId: string;
  provider: AnimeProvidersNames;
}

const AnimeId = ({ animeId, animeInfo, provider }: AnimeIdProps) => {
  const episodes = animeInfo.episodes || [];

  return (
    <Layout title="Anime">
      <LinkHeading href={animeURL}>{`..${animeURL}/${animeId}`}</LinkHeading>
      <LinkList
        links={episodes.map((episode, i) => ({
          title: `${animeURL}/${animeId}/${i + 1}`,
          href: `${animeURL}/${provider}/${animeId}/${i + 1}`,
          key: episode.id,
        }))}
      />
    </Layout>
  );
};

// Static stuff ==============================================================//
export const getStaticProps: GetStaticProps<AnimeIdProps> = async (context) => {
  const { animeId, provider } = context.params as iQueryParams;
  const remoteId = animeService.localIdToRemoteId(animeId, provider);
  const animeInfo = await animeProviders[provider].fetchAnimeInfo(remoteId);
  return { props: { provider, animeId, animeInfo } };
};

export const getStaticPaths: GetStaticPaths<iQueryParams> = async () => {
  const animeProviders = (Object.keys(animes) as AnimeProvidersNames[]).map(
    (provider) => provider
  );

  const paths = animeProviders.flatMap((provider) =>
    animes[provider].map((anime) => ({
      params: { provider: provider, animeId: anime?.localId },
    }))
  );

  return { paths, fallback: false };
};

export default AnimeId;
