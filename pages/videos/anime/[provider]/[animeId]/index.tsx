import { IAnimeInfo } from '@consumet/extensions/dist/models';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Layout from '/components/Layout/Layout';
import LinkHeading from '/components/LinkHeading/LinkHeading';
import LinkList from '/components/LinkList/LinkList';
import animes from '/data/animes';
import { AnimeProvidersNames } from '/services/consumet-service';
import { animeProviders } from '/services/consumet-service-server';
import { animeURL } from '/utils/urls';
import { toUrlikeString } from '/utils/utils';

interface AnimeIdProps {
  animeInfo: IAnimeInfo;
  provider: AnimeProvidersNames;
}

interface iQueryParams extends ParsedUrlQuery {
  animeId: string;
  provider: AnimeProvidersNames;
}

const AnimeId = ({ animeInfo, provider }: AnimeIdProps) => {
  const animeId = animeInfo.id;
  const episodes = animeInfo.episodes || [];

  const animeTitle = (() => {
    const anime = animes[provider].find((anime) => anime.remoteId == animeId);
    const title = anime?.localId || anime?.remoteId;
    return toUrlikeString(title || '');
  })();

  return (
    <Layout title="Anime">
      <LinkHeading href={animeURL}>{`..${animeURL}/${animeTitle}`}</LinkHeading>
      <LinkList
        links={episodes.map((episode, i) => ({
          title: `${animeURL}/${animeTitle}/${i + 1}`,
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
  const animeInfo = await animeProviders[provider].fetchAnimeInfo(animeId);
  return { props: { animeInfo, provider } };
};

export const getStaticPaths: GetStaticPaths<iQueryParams> = async () => {
  const animeProviders = (Object.keys(animes) as AnimeProvidersNames[]).map(
    (provider) => provider
  );

  const paths = animeProviders.flatMap((provider) =>
    animes[provider].map((anime) => ({
      params: { animeId: anime?.remoteId, provider: provider },
    }))
  );

  return { paths, fallback: false };
};

export default AnimeId;
