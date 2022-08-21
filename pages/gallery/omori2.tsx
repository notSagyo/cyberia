import Album from '../../components/album/album';
import Layout from '../../components/layout';
import styles from '/styles/omori.module.scss';
import albumImages from '../../data/omoriAlbumImages2';

const Gallery = () => {
  return (
    <Layout title="Gallery" className="bgStars">
      <Album
        albumTitle="../public/img/omori/2"
        images={albumImages}
        descriptionProps={{ className: styles.description }}
        shellProps={{ className: styles.imageShell, noHr: true }}
      />
    </Layout>
  );
};

export default Gallery;
