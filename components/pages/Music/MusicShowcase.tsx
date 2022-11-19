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
      noPadding
      {...shellProps}
      className={cn(s.showcaseShell, shellProps?.className)}
      titleProps={{
        ...shellProps.titleProps,
        className: cn(s.showcaseShellTitle, shellProps?.titleProps?.className),
      }}
      bodyProps={{
        ...shellProps.bodyProps,
        className: cn(s.showcaseShellBody, shellProps?.bodyProps?.className),
      }}
    >
      <Anchor className={s.showcaseImageWrapper}>
        <Image
          alt={showcaseTitle}
          fill
          sizes={'auto'}
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
