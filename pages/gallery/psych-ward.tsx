import type { NextPage } from 'next';
import Layout from '../../components/Layout/Layout';
import { albumImages } from '../../data/psych-ward-album-images';
import styles from '/styles/pages/psych-ward.module.scss';

const PsychWardPage: NextPage = () => {
  const lebensgefahrImages = albumImages.lebensgefahr.map((img) => (
    <>
      <img src={img.src} alt={img.title} className={styles.lebensgefahrImage} />
    </>
  ));

  return <Layout className="bgBlack">{lebensgefahrImages}</Layout>;
};

export default PsychWardPage;