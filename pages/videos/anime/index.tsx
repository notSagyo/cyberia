import type { NextPage } from 'next';
import Layout from '/components/Layout/Layout';
import LinkHeading from '/components/LinkHeading/LinkHeading';
import LinkList from '/components/LinkList/LinkList';
import animes from '/data/animes';
import { animeURL, videosURL } from '/utils/urls';
import { toUrlikeString } from '/utils/utils';

const AnimePage: NextPage = () => {
  return (
    <Layout>
      <LinkHeading href={videosURL}>..{animeURL}</LinkHeading>
      <LinkList
        links={animes.default.map((anime) => {
          const title = anime.title || anime.id;
          return {
            href: `${animeURL}/${anime.id}`,
            title: `/pages${animeURL}/${toUrlikeString(title)}`,
            key: anime.id,
          };
        })}
      />
    </Layout>
  );
};

export default AnimePage;
