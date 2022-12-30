import type { NextPage } from 'next';
import { useEffect } from 'react';
import Layout from '/components/Layout/Layout';
import { useMusicContext } from '/context/MusicContext';
import { albumImages } from '/data/psych-ward-album-images';
import { psychWardSong } from '/data/songs';
import styles from '/styles/pages/psych-ward.module.scss';

const didPlaySongKey = 'did-play-ward-song';

const PsychWardPage: NextPage = () => {
  const { playOnce } = useMusicContext();

  useEffect(() => {
    // Change songs only first time visting
    playOnce(psychWardSong, didPlaySongKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const lebensgefahrImages = albumImages.lebensgefahr.map((img) => (
    <img
      key={img.src}
      src={img.src}
      alt={img.title}
      className={styles.lebensgefahrImage}
    />
  ));

  return (
    <Layout title="psych_ward" className="bgBlack">
      {lebensgefahrImages}
    </Layout>
  );
};

export default PsychWardPage;
