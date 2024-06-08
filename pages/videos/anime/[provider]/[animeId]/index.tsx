import { IAnimeInfo } from '@consumet/extensions/dist/models';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '/components/Layout/Layout';
import LinkHeading from '/components/LinkHeading/LinkHeading';
import LinkList from '/components/LinkList/LinkList';
import animeService from '/services/anime-service';
import { AnimeProvidersNames } from '/services/consumet-service';
import { animeURL } from '/utils/urls';

const AnimeId = () => {
  const [animeInfo, setAnimeInfo] = useState<IAnimeInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { provider, animeId } = useRouter().query;

  useEffect(() => {
    provider &&
      animeService
        .fetchInfo(
          animeService.localIdToRemoteId(String(animeId)),
          provider as AnimeProvidersNames,
        )
        .then((res) => res && setAnimeInfo(res))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
  }, [provider, animeId]);

  const episodes = animeInfo?.episodes || [];

  return (
    <Layout title="Anime">
      <LinkHeading href={animeURL}>{`..${animeURL}/${animeId}`}</LinkHeading>
      {animeInfo ? (
        <LinkList
          links={episodes.map((episode, i) => ({
            title: `${animeURL}/${animeId}/${i + 1}`,
            href: `${animeURL}/${provider}/${animeId}/${i + 1}`,
            key: episode.id,
          }))}
        />
      ) : loading ? (
        <Image src="/img/loading.gif" alt="loading" width={384} height={51} />
      ) : (
        <Image
          src="/img/temporarily.gif"
          alt="loading"
          width={384}
          height={51}
        />
      )}
    </Layout>
  );
};

export default AnimeId;
