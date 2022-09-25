import Layout from '../../components/Layout/Layout';
import mangas from '../../data/mangas';
import { mangaURL } from '../../utils/urls';
import LinkListItem from '../../components/LinkList/LinkListItem';
import LinkList from '../../components/LinkList/LinkList';

const ReadPage = () => {
  return (
    <Layout>
      <h1 className="h1">READ</h1>
      <LinkList>
        {mangas.map((manga) => (
          <LinkListItem href={`${mangaURL}/${manga.id}`} key={manga.id}>
            {mangaURL}/{manga.name.toLocaleLowerCase().replaceAll(' ', '_')}
          </LinkListItem>
        ))}
      </LinkList>
    </Layout>
  );
};

export default ReadPage;
