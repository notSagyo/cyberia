import type { NextPage } from 'next';
import Layout from '../../../components/Layout/Layout';
import LinkHeading from '../../../components/LinkHeading/LinkHeading';
import LinkList from '../../../components/LinkList/LinkList';
import animes from '../../../data/animes';
import { animeURL, videosURL } from '../../../utils/urls';

const AnimePage: NextPage = () => {
  return (
    <Layout>
      <LinkHeading href={videosURL}>..{animeURL}</LinkHeading>
      <LinkList
        links={animes.map((anime) => ({
          href: `${animeURL}/${anime.id}`,
          title: `/pages/videos/${anime.id.replaceAll('-', '_')}`,
          key: anime.id,
        }))}
      />
    </Layout>
  );
};

export default AnimePage;
