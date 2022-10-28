import Album from '../../components/Album/Album';
import Layout from '../../components/Layout/Layout';
import albumImages from '../../data/omori-album-images-4';
import styles from '/styles/pages/omori.module.scss';

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
