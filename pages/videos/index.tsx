import Link from 'next/link';
import Anchor from '../../components/anchor';
import Layout from '../../components/layout';
import animes from '../../data/animes';

function Videos() {
  return (
    <Layout title="Videos">
      <h1 className="h1">VIDEOS</h1>
      {animes.map((anime, i) => (
        <span key={i}>
          <Link href={'/videos/' + anime.id + '/1'} passHref>
            <Anchor>
              <h2 className="h3">
                ../pages/videos/{anime.id.replaceAll('-', '_')}
              </h2>
            </Anchor>
          </Link>
        </span>
      ))}
    </Layout>
  );
}

export default Videos;
