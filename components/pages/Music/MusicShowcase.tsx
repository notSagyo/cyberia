import cn from 'classnames';
import Image, { ImageProps } from 'next/image';
import Shell, { ShellProps } from '../../Shell/Shell';
import Anchor from '../../utils/Anchor/Anchor';
import s from './Music.module.scss';
import { YtThumbnailQuality } from '/types/song';

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
      className={cn(s.showcaseShell, shellProps?.className)}
      shellTitleProps={{ className: s.showcaseShellTitle }}
      bodyProps={{
        ...shellProps.bodyProps,
        className: cn(s.showcaseShellBody, shellProps?.bodyProps?.className),
      }}
    >
      <Anchor>
        <Image
          alt={showcaseTitle}
          fill={true}
          className={s.showcaseImage}
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
