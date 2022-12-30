import type { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Layout from '/components/Layout/Layout';
import LinkHeading from '/components/LinkHeading/LinkHeading';
import LinkList from '/components/LinkList/LinkList';
import animes from '/data/animes';
import { AnimeProvidersNames } from '/services/consumet-service';
import { animeURL, bdayURL } from '/utils/urls';
import { toUrlikeString } from '/utils/utils';

interface ProviderPageProps {
  provider: AnimeProvidersNames;
}

interface iQueryParams extends ParsedUrlQuery {
  provider: AnimeProvidersNames;
}

const ProviderPage = ({ provider }: ProviderPageProps) => {
  return (
    <Layout title="Anime">
      <LinkHeading href={bdayURL}>..{animeURL}</LinkHeading>
      <LinkList
        links={animes[provider].map((anime) => {
          const title = anime.localId || anime.remoteId;
          return {
            href: `${animeURL}/${provider}/${anime.remoteId}`,
            title: `/pages${animeURL}/${toUrlikeString(title)}`,
            key: anime.remoteId,
          };
        })}
      />
    </Layout>
  );
};

// Static stuff ==============================================================//
export const getStaticProps: GetStaticProps<ProviderPageProps> = async (
  context
) => {
  const { provider } = context.params as iQueryParams;
  return { props: { provider } };
};

export const getStaticPaths: GetStaticPaths<iQueryParams> = async () => {
  const providers = (Object.keys(animes) as AnimeProvidersNames[]).map(
    (provider) => provider
  );

  const paths = providers.map((provider) => ({
    params: { provider: provider },
  }));

  return { paths, fallback: false };
};

export default ProviderPage;
