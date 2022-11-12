import cn from 'classnames';
import Image, { ImageProps } from 'next/image';
import { YtThumbnailQuality } from '../../../types';
import Shell, { ShellProps } from '../../Shell/Shell';
import Anchor from '../../utils/Anchor/Anchor';
import styles from './Music.module.scss';

type MusicShowcaseProps = Partial<ImageProps> & {
  videoId?: string;
  imageUrl?: string;
  showcaseTitle: string;
  thumbnailQuality?: YtThumbnailQuality;
  shellProps: ShellProps;
} & ({ imageUrl: string } | { videoId: string });

/** imageUrl or YouTube videoId prop required */
const MusicShowcase = ({
  videoId,
  imageUrl,
  showcaseTitle,
  thumbnailQuality = 'maxresdefault',
  shellProps,
  ...props
}: MusicShowcaseProps) => {
  return (
    <Shell
      shellTitle={showcaseTitle}
      minimizeable={false}
      {...shellProps}
      className={cn(styles.musicShowcaseShell, shellProps?.className)}
      bodyProps={{
        ...shellProps.bodyProps,
        className: cn(
          styles.musicShowcaseShellBody,
          shellProps?.bodyProps?.className
        ),
      }}
    >
      <Anchor>
        <Image
          alt={showcaseTitle}
          fill={true}
          className={styles.musicShowcaseImage}
          {...props}
          src={
            imageUrl ||
            `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`
          }
        />
      </Anchor>
    </Shell>
  );
};

export default MusicShowcase;
