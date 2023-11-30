import { IAnimeInfo } from '@consumet/extensions/dist/models';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '/components/Layout/Layout';
import LinkHeading from '/components/LinkHeading/LinkHeading';
import LinkList from '/components/LinkList/LinkList';
import animeService from '/services/anime-service';
import { animeProviders } from '/services/consumet-service-server';
import { animeURL } from '/utils/urls';

const AnimeId = () => {
  const [animeInfo, setAnimeInfo] = useState<IAnimeInfo | null>(null);
  const { provider, animeId } = useRouter().query;

  useEffect(() => {
    animeProviders.gogoanime
      .fetchAnimeInfo(animeService.localIdToRemoteId(String(animeId)))
      .then((res) => setAnimeInfo(res))
      .catch((err) => console.error(err));
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
      ) : (
        <Image src="/img/loading.gif" alt="loading" width={384} height={51} />
      )}
    </Layout>
  );
};

export default AnimeId;
