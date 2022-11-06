import Album from '../../components/Album/Album';
import Layout from '../../components/Layout/Layout';
import albumImages from '../../data/visual-experiments-album-images';

const VisualExperimentsPage = () => {
  return (
    <Layout title="Gallery" className="bgStars">
      <Album
        images={albumImages}
        photoWidth={'100%'}
        maximizeable
        shellProps={{ style: { maxWidth: '48%', marginBottom: 'auto' } }}
        albumTitle="/public/img/visual_experiments"
      />
    </Layout>
  );
};

export default VisualExperimentsPage;
