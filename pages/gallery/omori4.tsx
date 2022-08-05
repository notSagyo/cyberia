import Album from '../../components/album';
import Layout from '../../components/layout';
import styles from '/styles/omori.module.scss';
import albumImages from '../../data/omoriAlbumImages4';

const Gallery = () => {
  return (
    <Layout title="Gallery" className={styles.bgGlitched}>
      <Album
        descriptionClassname={styles.glitchedDescription}
        imagesFolderPath="/img/omori"
        shellProps={{ bodyProps: { style: { overflow: 'hidden' } } }}
        images={albumImages}
      />
    </Layout>
  );
};

export default Gallery;
