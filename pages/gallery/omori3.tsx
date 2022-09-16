import Album from '../../components/Album/Album';
import Layout from '../../components/Layout';
import styles from '/styles/omori.module.scss';
import albumImages from '../../data/omoriAlbumImages3';

const Gallery = () => {
  return (
    <Layout title="Gallery" className="bgStars">
      <Album
        albumTitle="/public/img/omori/3"
        images={albumImages}
        descriptionProps={{ className: styles.description }}
        shellProps={{ className: styles.imageShell }}
      />
    </Layout>
  );
};

export default Gallery;
