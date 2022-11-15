import { useCallback, useState } from 'react';
import ReactPlayer from 'react-player';
import { loadSongFromStorage } from './CustomPlayerHelper';
import styles from './CustomPlayerMain.module.scss';
import CustomPlayer, {
  CustomPlayerProps,
  storagePausedKey,
} from '/components/CustomPlayer/CustomPlayer';
import { MAIN_SONG_START_TIME } from '/data/songs';

// If it's paused on storage then autoplay will be false
const autoplay = !Boolean(Number(localStorage.getItem(storagePausedKey)));

/** Always import this component with next/dynamic */
const CustomPlayerMain = ({ onReady, ...props }: CustomPlayerProps) => {
  const [firstLoad, setFirstLoad] = useState(true);

  // Load song from localstorage else load main song at specified time
  const handleReady = useCallback(
    (p: ReactPlayer) => {
      onReady && onReady(p);
      const storedSong = loadSongFromStorage();
      if (storedSong && firstLoad) {
        p.seekTo(storedSong.time);
        // Loader for YouTube
        if (storedSong.source === 'youtube') {
          p.getInternalPlayer()?.loadPlaylist(
            storedSong.url,
            storedSong.songIndex,
            storedSong.time
          );
          if (!autoplay) p.getInternalPlayer()?.pauseVideo();
        }
      } else if (firstLoad) p.seekTo(MAIN_SONG_START_TIME);
      setFirstLoad(false);
    },
    [onReady, firstLoad]
  );

  return (
    <div className={styles.mainPlayerContainer}>
      <CustomPlayer
        {...props}
        autoplay={props.playing ?? autoplay}
        playing={props.playing}
        onReady={handleReady}
        saveToStorage
        shellProps={{ className: styles.mainPlayerShell }}
      />
    </div>
  );
};

export default CustomPlayerMain;
