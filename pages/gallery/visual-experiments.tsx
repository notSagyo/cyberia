import Album from '../../components/album/album';
import Layout from '../../components/layout';
import albumImages from '../../data/visualExperimentsAlbumImages';

const Gallery = () => {
  return (
    <Layout title="Gallery" className="bgStars">
      <Album
        images={albumImages}
        photoWidth={'100%'}
        maximizeable
        shellProps={{ style: { maxWidth: '48%', margin: 'auto' } }}
        albumTitle="../public/img/visual_experiments"
      />
    </Layout>
  );
};

export default Gallery;
