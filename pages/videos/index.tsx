import Anchor from '../../components/utils/Anchor';
import Layout from '../../components/Layout';
import animes from '../../data/animes';
import { animeURL } from '../../utils/url';

function Videos() {
  return (
    <Layout title="Videos">
      <h1 className="h1">VIDEOS</h1>
      {animes.map((anime, i) => (
        <span key={i}>
          <Anchor href={`${animeURL}/${anime.id}`}>
            <h2 className="h3">
              /pages/videos/{anime.id.replaceAll('-', '_')}
            </h2>
          </Anchor>
        </span>
      ))}
    </Layout>
  );
}

export default Videos;
