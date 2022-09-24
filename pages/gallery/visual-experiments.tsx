import Album from '../../components/Album/Album';
import Layout from '../../components/Layout/Layout';
import albumImages from '../../data/visualExperimentsAlbumImages';

const Gallery = () => {
  return (
    <Layout title="Gallery" className="bgStars">
      <Album
        images={albumImages}
        photoWidth={'100%'}
        maximizeable
        shellProps={{ style: { maxWidth: '48%', marginBottom: 'auto' } }}
        albumTitle="../public/img/visual_experiments"
      />
    </Layout>
  );
};

export default Gallery;
