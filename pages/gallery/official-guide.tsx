import type { NextPage } from 'next';
import Album from '/components/Album/Album';
import AlbumPicture from '/components/Album/AlbumPicture';
import Layout from '/components/Layout/Layout';
import albumImages from '/data/lain-game-official-guide';

const OfficialGuidePage: NextPage = () => {
  // This album's first image is double the width
  const firstImage = (
    <AlbumPicture
      maximizeable
      image={albumImages[0]}
      photoWidth={'100%'}
      shellProps={{ style: { width: '100%' } }}
    />
  );

  return (
    <Layout title="Gallery" className="bgStars">
      <Album
        albumTitle="/public/img/official_guide"
        images={albumImages}
        imageWidth={'100%'}
        maximizeable
        shellProps={{
          style: { maxWidth: '48%', marginBottom: 'auto' },
          className: 'bgBlack',
        }}
        putElementsAtIndex={[
          { element: firstImage, index: 0, mode: 'override' },
        ]}
      />
    </Layout>
  );
};

export default OfficialGuidePage;
