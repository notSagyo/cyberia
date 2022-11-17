import { useCallback } from 'react';
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
const storedSong = loadSongFromStorage();
let firstLoad = true;

/** Always import this component with next/dynamic */
const CustomPlayerMain = ({ onReady, ...props }: CustomPlayerProps) => {
  // Load song from localstorage else load main song at specified time
  const handleReady = useCallback(
    (player: ReactPlayer) => {
      onReady && onReady(player);
      if (storedSong && firstLoad) {
        player.seekTo(storedSong.time);
        // Restore YouTube playlist state
        if (storedSong.source === 'youtube')
          player
            .getInternalPlayer()
            .cuePlaylist(storedSong.url, storedSong.songIndex, storedSong.time);
      } else if (firstLoad) player.seekTo(MAIN_SONG_START_TIME);
      firstLoad = false;
    },
    [onReady]
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
