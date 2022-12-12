import cn from 'classnames';
import _ from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { useMusicContext } from '../../context/MusicContext';
import Album from '/components/Album/Album';
import AlbumPicture from '/components/Album/AlbumPicture';
import Layout from '/components/Layout/Layout';
import albumImages from '/data/omori-album-images-1';
import { omoriSong } from '/data/songs';
import styles from '/styles/pages/omori.module.scss';

const didPlaySongKey = 'did-play-omori-song';
const didTouchCatKey = 'did-touch-cat';

const OmoriPage = () => {
  const catEyesRef = useRef<HTMLDivElement>(null);
  const { playOnce } = useMusicContext();
  const [didTouchCat, setdidTouchCat] = useState<boolean>(false);

  useEffect(() => {
    // Change songs only first time visting
    playOnce(omoriSong, didPlaySongKey);

    // Did touch the cat this session ? OwO
    setdidTouchCat(Boolean(Number(sessionStorage.getItem(didTouchCatKey))));

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCatClick = () => {
    if (didTouchCat) return;
    const audio = new Audio('/sound/big-yellow-cat-scream.mp3');
    audio.play();
    setdidTouchCat(true);
    window.sessionStorage.setItem('did-touch-cat', String(Number(true)));
  };

  const catBody = (
    <img
      className={styles.cat}
      src="/img/big-yellow-cat-body.png"
      width={350}
      alt="big yellow cat"
    />
  );

  const catEyes = (
    <div
      className={cn(styles.catEyesContainer, !didTouchCat && 'pointer')}
      onClick={handleCatClick}
    >
      <div className={styles.imgWrapper}>
        <div className={styles.catEyes} ref={catEyesRef}></div>
      </div>
    </div>
  );

  const pictureWithCat = (
    <div>
      {catEyes}
      {catBody}
      <AlbumPicture
        // Middle image will have the cat on it
        image={albumImages[1]}
        descriptionProps={{ className: styles.description }}
        shellProps={{ closeable: false, bodyProps: { children: catBody } }}
      />
    </div>
  );

  return (
    <Layout title="Gallery" className="bgOmori">
      <Album
        albumTitle="/public/img/omori"
        images={albumImages}
        className={styles.catAlbum}
        shellProps={{ className: styles.imageShell }}
        descriptionProps={{ className: styles.description }}
        putElementsAtIndex={[
          // Override the image at index 1 for the picture with the cat
          { element: pictureWithCat, mode: 'override', index: 1 },
        ]}
      />
    </Layout>
  );
};

export default OmoriPage;
