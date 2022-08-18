import Link from 'next/link';
import Anchor from '../../components/anchor';
import Layout from '../../components/layout';
import mangas from '../../data/mangas';
import { baseURL, mangaURL, readURL } from '../../utils/url';

const Read = () => {
  return (
    <Layout>
      <h1 className="h1">Read</h1>
      {mangas.map((manga) => (
        <Link
          href={`${mangaURL}/${manga.id}/${manga.firstChapterId}/1`}
          key={manga.id}
          passHref
        >
          <Anchor>
            <h2 className="h2">
              ..{mangaURL}/{manga.name.toLocaleLowerCase().replaceAll(' ', '_')}
            </h2>
          </Anchor>
        </Link>
      ))}
    </Layout>
  );
};

export default Read;
