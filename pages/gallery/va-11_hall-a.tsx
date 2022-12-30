import type { NextPage } from 'next';
import Album from '/components/Album/Album';
import Layout from '/components/Layout/Layout';
import albumImages from '/data/va11halla-album-images';

const Va11hallaPage: NextPage = () => {
  return (
    <Layout title="va-11_hall-a" className="bgStars">
      <Album
        albumTitle="/public/img/va-11_hall-a"
        images={albumImages}
        imageWidth={'100%'}
        maximizeable
        shellProps={{
          style: { maxWidth: '48%', marginBottom: 'auto' },
          className: 'bgBlack',
        }}
      />
    </Layout>
  );
};

export default Va11hallaPage;
