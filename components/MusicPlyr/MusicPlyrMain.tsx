import cn from 'classnames';
import { APITypes } from 'plyr-react';
import React from 'react';
import MusicPlyr, { MusicPlyrProps } from './MusicPlyr';
import styles from './MusicPlyr.module.scss';

const MusicPlyrMain = React.forwardRef<APITypes, MusicPlyrProps>(
  (props, ref) => {
    return (
      <div className={styles.mainPlyrShellContainer}>
        <MusicPlyr
          ref={ref}
          videoOptions={{ autoplay: true, volume: 0.2 }}
          {...props}
          shellProps={{
            className: cn('musicPlyrMainContainer', styles.mainPlyrShell),
          }}
        />
      </div>
    );
  }
);

MusicPlyrMain.displayName = 'MusicPlyrMain';
export default MusicPlyrMain;
