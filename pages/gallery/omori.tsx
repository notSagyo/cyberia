import _ from 'lodash';
import { useEffect, useRef } from 'react';
import Album from '../../components/Album/Album';
import AlbumPicture from '../../components/Album/AlbumPicture';
import Layout from '../../components/Layout/Layout';
import { useMusicPlyrContext } from '../../contexts/MusicPlyrContext';
import albumImages from '../../data/omoriAlbumImages1';
import { omoriSong } from '../../data/songs';
import styles from '/styles/pages/omori.module.scss';

const Gallery = () => {
  const catEyesRef = useRef<HTMLDivElement>(null);
  const { setVideoId, setVideoTitle } = useMusicPlyrContext();

  useEffect(() => {
    // Change songs
    setVideoId(omoriSong.id);
    setVideoTitle(omoriSong.title);

    // Cat eyes movement
    const moveEyes = (eyes: HTMLElement, mousePosX: number) => {
      const eyesRect = eyes.getBoundingClientRect();
      const distanceFromMouse =
        mousePosX - (eyesRect.left + eyesRect.width / 2);
      const translation = _.clamp(distanceFromMouse * 0.05, -25, 23);
      eyes.style.transform = `translateX(${translation}px)`;
    };

    // Listen to mouse movement
    const onMouseMove = (e: MouseEvent) => {
      if (!catEyesRef.current) return;
      moveEyes(catEyesRef.current, e.clientX);
    };

    window.addEventListener('mousemove', _.throttle(onMouseMove, 20));
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  const catBody = (
    <img
      className={styles.cat}
      src="/img/big-yellow-cat-body.png"
      width={350}
      alt=""
    />
  );

  const catEyes = (
    <div className={styles.catEyesContainer}>
      <div className={styles.imgWrapper}>
        <div className={styles.catEyes} ref={catEyesRef}></div>
      </div>
    </div>
  );

  const pictureWithCat = (
    <>
      <div className={styles.catContainer}>
        {catEyes}
        {catBody}
        <AlbumPicture
          // Middle image will have the cat on it
          image={albumImages[1]}
          descriptionProps={{ className: styles.description }}
          shellProps={{ closeable: false, bodyProps: { children: catBody } }}
        />
      </div>
    </>
  );

  return (
    <Layout title="Gallery" className="bgOmori">
      <Album
        albumTitle="/public/img/omori"
        images={albumImages}
        descriptionProps={{ className: styles.description }}
        shellProps={{ className: styles.imageShell }}
        putElementAtIndex={[
          // Override the image at index 1 for the picture with the cat
          { element: pictureWithCat, mode: 'override', position: 1 },
        ]}
      />
    </Layout>
  );
};

export default Gallery;
