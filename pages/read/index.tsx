import Layout from '/components/Layout/Layout';
import LinkList from '/components/LinkList/LinkList';
import mangas from '/data/mangas';
import { mangaURL } from '/utils/urls';
import { toUrlikeString } from '/utils/utils';

const ReadPage = () => {
  return (
    <Layout>
      <h1 className="h1">READ</h1>
      <LinkList
        links={mangas.default.map((manga) => ({
          href: `${mangaURL}/${manga.id}`,
          title: `${mangaURL}/${toUrlikeString(manga.title || manga.id)}`,
          key: manga.id,
        }))}
      />
    </Layout>
  );
};

export default ReadPage;
