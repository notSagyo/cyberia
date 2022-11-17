import { useCallback, useEffect, useState } from 'react';
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
const song = loadSongFromStorage();
// Helper variables
let shouldPausePlaylist = false;
let firstLoad = true;

// ?TODO: Mute on playlist load to avoid initial chirp
/** Always import this component with next/dynamic */
const CustomPlayerMain = ({ onReady, ...props }: CustomPlayerProps) => {
  const [ytPlayer, setYtPlayer] = useState<any>();

  // Load song from localstorage else load main song at specified time
  const handleReady = useCallback(
    (player: ReactPlayer) => {
      onReady && onReady(player);
      if (song && firstLoad) {
        player.seekTo(song.time);
        // Restore YouTube playlist state
        if (song.source === 'youtube') {
          const interalPLayer = player.getInternalPlayer();
          const didUserInteract = new Audio('/sound/empty-audio.mp3').play();
          interalPLayer?.loadPlaylist(song.url, song.songIndex, song.time);
          didUserInteract.then(() => (shouldPausePlaylist = true));
          setYtPlayer(interalPLayer);
        }
      } else if (firstLoad) player.seekTo(MAIN_SONG_START_TIME);
      firstLoad = false;
    },
    [onReady]
  );

  useEffect(() => {
    // Pause player when a playlist is loaded, if autoplay is set to false
    if (autoplay || !song || !ytPlayer || song.source !== 'youtube') return;
    const onStateChangeYt = (e: any) => {
      if (!shouldPausePlaylist || e.data != 1) return;
      ytPlayer?.pauseVideo();
      shouldPausePlaylist = false;
    };
    ytPlayer.addEventListener('onStateChange', onStateChangeYt);
    return () => ytPlayer.removeEventListener('onStateChange', onStateChangeYt);
  }, [ytPlayer]);

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
