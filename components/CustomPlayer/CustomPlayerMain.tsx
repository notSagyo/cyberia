import { useCallback, useState } from 'react';
import ReactPlayer from 'react-player';
import { loadSongFromStorage } from './CustomPlayerHelper';
import styles from './CustomPlayerMain.module.scss';
import CustomPlayer, {
  CustomPlayerProps,
} from '/components/CustomPlayer/CustomPlayer';
import { MAIN_SONG_START_TIME } from '/data/songs';

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
        if (storedSong.source === 'youtube')
          p.getInternalPlayer()?.loadPlaylist(
            storedSong.url,
            storedSong.songIndex,
            storedSong.time
          );
      } else if (firstLoad) p.seekTo(MAIN_SONG_START_TIME);
      setFirstLoad(false);
    },
    [onReady, firstLoad]
  );

  return (
    <div className={styles.mainPlayerContainer}>
      <CustomPlayer
        {...props}
        autoplay
        saveToStorage
        onReady={handleReady}
        shellProps={{ className: styles.mainPlayerShell }}
      />
    </div>
  );
};

export default CustomPlayerMain;
