import Anchor from '../../components/utils/Anchor/Anchor';
import Layout from '../../components/Layout/Layout';
import animes from '../../data/animes';
import { animeURL } from '../../utils/urls';

function Videos() {
  return (
    <Layout title="Videos">
      <h1 className="h1">VIDEOS</h1>
      {animes.map((anime) => (
        <span key={anime.id}>
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
