import type { NextPage } from 'next';
import Album from '../../components/Album/Album';
import Layout from '../../components/Layout/Layout';
import albumImages from '../../data/va11halla-album-images';

const Va11hallaPage: NextPage = () => {
  return (
    <Layout title="Gallery" className="bgStars">
      <Album
        images={albumImages}
        photoWidth={'100%'}
        maximizeable
        shellProps={{
          style: { maxWidth: '48%', marginBottom: 'auto' },
          className: 'bgBlack',
        }}
        albumTitle="/public/img/visual_experiments"
      />
    </Layout>
  );
};

export default Va11hallaPage;
