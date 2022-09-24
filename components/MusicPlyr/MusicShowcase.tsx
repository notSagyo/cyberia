import cn from 'classnames';
import Image, { ImageProps } from 'next/image';
import { YtThumbnailQuality } from '../../types';
import Shell, { ShellProps } from '../Shell/Shell';
import Anchor from '../utils/Anchor/Anchor';
import styles from './MusicPlyr.module.scss';

interface MusicShowcaseProps extends Partial<ImageProps> {
  videoId: string;
  videoTitle: string;
  thumbnailQuality?: YtThumbnailQuality;
  shellProps: ShellProps;
}

const MusicShowcase = ({
  videoId,
  videoTitle,
  thumbnailQuality = 'maxresdefault',
  shellProps,
  ...props
}: MusicShowcaseProps) => {
  return (
    <Shell
      shellTitle={videoTitle}
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
          alt={videoTitle}
          layout="fill"
          objectFit="cover"
          {...props}
          src={`https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`}
        />
      </Anchor>
    </Shell>
  );
};

export default MusicShowcase;
