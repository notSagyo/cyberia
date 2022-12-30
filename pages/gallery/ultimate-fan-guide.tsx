import type { NextPage } from 'next';
import Album from '/components/Album/Album';
import Layout from '/components/Layout/Layout';
import albumImages from '/data/ultimate-fan-guide';

const UltimateFanGuidePage: NextPage = () => {
  return (
    <Layout title="ultimate_fan_guide" className="bgStars">
      <Album
        albumTitle="/public/img/ultimate_fan_guide"
        images={albumImages}
        imageWidth={'100%'}
        maximizeable
        shellProps={{ style: { maxWidth: '48%', marginBottom: 'auto' } }}
      />
    </Layout>
  );
};

export default UltimateFanGuidePage;
