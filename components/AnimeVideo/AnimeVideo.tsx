import cn from 'classnames';
import Shell, { ShellProps } from '../Shell/Shell';
import styles from './AnimeVideo.module.scss';

interface VideoProps extends ShellProps {
  episodeUrl: string;
  videoTitle?: string;
  shellWidth?: string | number;
}

const AnimeVideo = ({
  episodeUrl,
  videoTitle,
  shellWidth = 720,
  ...props
}: VideoProps) => {
  return (
    <Shell
      shellTitle={videoTitle}
      noPadding
      closeable
      {...props}
      className={cn(styles.shell, props?.className)}
      bodyProps={{
        ...props?.bodyProps,
        className: cn(styles.shellBody, props?.bodyProps?.className),
        style: { width: shellWidth, ...props?.bodyProps?.style },
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
