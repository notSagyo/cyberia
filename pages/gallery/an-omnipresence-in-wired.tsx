import type { NextPage } from 'next';
import Album from '/components/Album/Album';
import Layout from '/components/Layout/Layout';
import albumImages from '/data/an-omnipresence-in-wired';

const AnOmnipresenceInWiredPage: NextPage = () => {
  return (
    <Layout title="Gallery" className="bgStars">
      <Album
        albumTitle="/public/img/an_omnipresence_in_wired"
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

export default AnOmnipresenceInWiredPage;
