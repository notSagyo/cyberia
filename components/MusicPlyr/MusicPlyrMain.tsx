import cn from 'classnames';
import MusicPlyr, { MusicPlyrProps } from './MusicPlyr';
import styles from '/styles/music-plyr.module.scss';

const MusicPlyrMain = ({ ...props }: MusicPlyrProps) => {
  return (
    <div className={styles.mainPlyrShellContainer}>
      <MusicPlyr
        {...props}
        videoOptions={{ autoplay: true }}
        shellProps={{
          className: cn('musicPlyrMainContainer', styles.mainPlyrShell),
        }}
      />
    </div>
  );
};

export default MusicPlyrMain;
