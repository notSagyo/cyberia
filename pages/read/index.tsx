import Layout from '../../components/layout';
import mangas from '../../data/mangas';
import { mangaURL } from '../../utils/url';
import LinkListItem from '../../components/link-list/link-list-item';
import LinkList from '../../components/link-list/link-list';

const Read = () => {
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

export default Read;
