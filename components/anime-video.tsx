import cn from 'classnames';
import { useEffect, useState } from 'react';
import Shell, { ShellProps } from './shell/shell';
import styles from '/styles/anime-video.module.scss';

interface VideoProps {
  episodeUrl: string;
  videoTitle?: string;
  shellWidth?: string | number;
  shellProps?: ShellProps;
}

const AnimeVideo = ({
  episodeUrl,
  videoTitle,
  shellWidth = 720,
  shellProps,
}: VideoProps) => {
  return (
    <Shell
      shellTitle={videoTitle}
      noPadding
      {...shellProps}
      className={cn(styles.shell, shellProps?.className)}
      bodyProps={{
        ...shellProps?.bodyProps,
        className: cn(styles.shellBody, shellProps?.bodyProps?.className),
        style: { width: shellWidth, ...shellProps?.bodyProps?.style },
      }}
    >
      <div className={styles.videoAspectRatio}>
        <div className={styles.iframeWrapper}>
          <iframe
            scrolling="no"
            id="videoIframe"
            src={episodeUrl}
            frameBorder="0"
            allowFullScreen
            width={'100%'}
            height={'100%'}
            style={{
              display: 'block',
              overflow: 'hidden',
            }}
          ></iframe>
        </div>
      </div>
    </Shell>
  );
};

export default AnimeVideo;
