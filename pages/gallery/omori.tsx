import Album from '../../components/album';
import Layout from '../../components/layout';
import styles from '/styles/omori.module.scss';
import albumImages from '../../data/omoriAlbumImages1';

const Gallery = () => {
  return (
    <Layout title="Gallery" className="bgStars">
      <Album
        descriptionClassname={styles.description}
        albumTitle="../public/img/omori/3"
        images={albumImages}
      />
    </Layout>
  );
};

export default Gallery;