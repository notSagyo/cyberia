import Album from '/components/Album/Album';
import Layout from '/components/Layout/Layout';
import albumImages from '/data/visual-experiments-album-images';

const VisualExperimentsPage = () => {
  return (
    <Layout title="visual_experiments" className="bgStars">
      <Album
        albumTitle="/public/img/visual_experiments"
        images={albumImages}
        imageWidth={'100%'}
        maximizeable
        shellProps={{ style: { maxWidth: '48%', marginBottom: 'auto' } }}
      />
    </Layout>
  );
};

export default VisualExperimentsPage;
