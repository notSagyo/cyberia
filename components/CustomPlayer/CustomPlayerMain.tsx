import { useCallback, useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './CustomPlayerMain.module.scss';
import CustomPlayer, {
  CustomPlayerProps,
} from '/components/CustomPlayer/CustomPlayer';
import { MAIN_SONG_START_TIME } from '/data/songs';

/** Always import this component with next/dynamic */
const CustomPlayerMain = ({ onReady, ...props }: CustomPlayerProps) => {
  const [skipped, setSkipped] = useState(false);

  const handleReady = useCallback(
    (player: ReactPlayer) => {
      onReady && onReady(player);
      if (skipped || !MAIN_SONG_START_TIME) return;
      player.seekTo(MAIN_SONG_START_TIME);
      setSkipped(true);
    },
    [onReady, skipped]
  );

  return (
    <div className={styles.mainPlayerContainer}>
      <CustomPlayer
        {...props}
        onReady={handleReady}
        shellProps={{ className: styles.mainPlayerShell }}
      />
    </div>
  );
};

export default CustomPlayerMain;
