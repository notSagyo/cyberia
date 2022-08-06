import Album from '../../components/album';
import Layout from '../../components/layout';
import albumImages from '../../data/visualExperimentsAlbumImages';

const Gallery = () => {
  return (
    <Layout title="Gallery" className="bgStars">
      <Album
        images={albumImages}
        photoWidth={'100%'}
        shellProps={{ style: { maxWidth: '48%', margin: 'auto' } }}
        title="../public/img/visual_experiments"
      />
    </Layout>
  );
};

export default Gallery;
