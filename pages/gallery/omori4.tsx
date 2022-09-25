import Album from '../../components/Album/Album';
import Layout from '../../components/Layout/Layout';
import styles from '/styles/pages/omori.module.scss';
import albumImages from '../../data/omoriAlbumImages4';

const Omori4Page = () => {
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

export default Omori4Page;
