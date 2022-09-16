import Album from '../../components/Album/Album';
import Layout from '../../components/Layout';
import styles from '/styles/omori.module.scss';
import albumImages from '../../data/omoriAlbumImages1';
import AlbumPicture from '../../components/Album/AlbumPicture';
import { useEffect, useRef } from 'react';

const Gallery = () => {
  const catEyesRef = useRef<HTMLDivElement>(null);

  const moveEyes = (eyes: HTMLElement, mousePosX: number) => {
    const eyesRect = eyes.getBoundingClientRect();
    const distanceFromMouse = mousePosX - (eyesRect.left + eyesRect.width / 2);
    const translation = Math.min(Math.max(distanceFromMouse * 0.05, -25), 23);
    eyes.style.transform = `translateX(${translation}px)`;
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!catEyesRef.current) return;
      moveEyes(catEyesRef.current, e.clientX);
    };
    window.addEventListener('mousemove', onMouseMove);
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
          image={albumImages[1]}
          descriptionProps={{ className: styles.description }}
          shellProps={{
            closeable: false,
            bodyProps: { children: catBody },
          }}
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
          { element: pictureWithCat, mode: 'override', position: 1 },
        ]}
      />
    </Layout>
  );
};

export default Gallery;
