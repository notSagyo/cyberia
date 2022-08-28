import { IAnimeInfo } from '@consumet/extensions/dist/models';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Layout from '../../../../components/layout';
import LinkList from '../../../../components/link-list/link-list';
import LinkListItem from '../../../../components/link-list/link-list-item';
import LinkHeading from '../../../../components/link-heading';
import animes from '../../../../data/animes';
import { gogoanime } from '../../../../services/anime-service';
import { animeURL, videosURL } from '../../../../utils/url';

interface AnimeIdProps {
  animeInfo: IAnimeInfo;
}

interface iQueryParams extends ParsedUrlQuery {
  animeId: string;
}

const AnimeId = ({ animeInfo }: AnimeIdProps) => {
  const animeId = animeInfo.id;
  const episodes = animeInfo.episodes || [];

  const animeName = animes
    .find((anime) => anime.id == animeId)
    ?.id.toLocaleLowerCase();

  return (
    <Layout title="Videos">
      <LinkHeading href={videosURL}>{`..${animeURL}/${animeName}`}</LinkHeading>
      <LinkList>
        {episodes.map((episode, i) => (
          <LinkListItem href={`${animeURL}/${animeId}/${i + 1}`} key={i} />
        ))}
      </LinkList>
    </Layout>
  );
};

// Static stuff ==============================================================//
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
