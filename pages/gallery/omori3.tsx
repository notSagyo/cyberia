import Album from '/components/Album/Album';
import Layout from '/components/Layout/Layout';
import albumImages from '/data/omori-album-images-3';
import styles from '/styles/pages/omori.module.scss';

const Omori3Page = () => {
  return (
    <Layout title="omori3" className="bgStars">
      <Album
        albumTitle="/public/img/omori/3"
        images={albumImages}
        descriptionProps={{ className: styles.description }}
        shellProps={{ className: styles.imageShell }}
      />
    </Layout>
  );
};

export default Omori3Page;
