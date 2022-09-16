import Album from '../../components/Album/Album';
import Layout from '../../components/Layout';
import styles from '/styles/omori.module.scss';
import albumImages from '../../data/omoriAlbumImages4';

const Gallery = () => {
  return (
    <Layout title="Gallery" className={styles.bgGlitched}>
      <Album
        albumTitle="/public/img/omori/4"
        images={albumImages}
        descriptionProps={{ className: styles.glitchedDescription }}
        shellProps={{
          className: styles.imageShell,
          bodyProps: { style: { overflow: 'hidden' } },
        }}
      />
    </Layout>
  );
};

export default Gallery;
