import cn from 'classnames';
import Image, { ImageProps } from 'next/image';
import { YtThumbnailQuality } from '../../../types/types';
import Shell, { ShellProps } from '../../Shell/Shell';
import Anchor from '../../utils/Anchor/Anchor';
import styles from './Music.module.scss';

type MusicShowcaseProps = Partial<ImageProps> & {
  videoUrl?: string;
  imageUrl?: string;
  showcaseTitle: string;
  thumbnailQuality?: YtThumbnailQuality;
  shellProps: ShellProps;
} & ({ imageUrl: string } | { videoUrl: string });

/** imageUrl or videoUrl (YouTube) prop required */
const MusicShowcase = ({
  videoUrl,
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
            `https://img.youtube.com/vi/${videoUrl
              ?.split('/')
              .pop()}/${thumbnailQuality}.jpg`
          }
        />
      </Anchor>
    </Shell>
  );
};

export default MusicShowcase;
