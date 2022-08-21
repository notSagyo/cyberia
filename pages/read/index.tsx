import Link from 'next/link';
import Anchor from '../../components/anchor';
import Layout from '../../components/layout';
import mangas from '../../data/mangas';
import { mangaURL } from '../../utils/url';

const Read = () => {
  return (
    <Layout>
      <h1 className="h1">READ</h1>
      {mangas.map((manga) => (
        <Link href={`${mangaURL}/${manga.id}`} key={manga.id} passHref>
          <Anchor>
            <h2 className="h3">
              {mangaURL}/{manga.name.toLocaleLowerCase().replaceAll(' ', '_')}
            </h2>
          </Anchor>
        </Link>
      ))}
    </Layout>
  );
};

export default Read;
