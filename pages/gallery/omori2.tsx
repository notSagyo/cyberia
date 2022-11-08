import Album from '/components/Album/Album';
import Layout from '/components/Layout/Layout';
import albumImages from '/data/omori-album-images-2';
import styles from '/styles/pages/omori.module.scss';

const Omori2Page = () => {
  return (
    <Layout title="Gallery" className="bgStars">
      <Album
        albumTitle="/public/img/omori/2"
        images={albumImages}
        descriptionProps={{ className: styles.description }}
        shellProps={{ className: styles.imageShell, noHr: true }}
      />
    </Layout>
  );
};

export default Omori2Page;
