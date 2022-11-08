import cn from 'classnames';
import { HTMLAttributes } from 'react';
import Shell, { ShellProps } from '../Shell/Shell';
import styles from './Album.module.scss';
import { IAlbumImage } from '/types';

interface AlbumPictureProps {
  // Shell props
  image: IAlbumImage;
  photoWidth?: number | string;
  shellProps?: ShellProps;
  // Shell titlebar props
  closeable?: boolean;
  maximizeable?: boolean;
  // Description props
  descriptionProps?: HTMLAttributes<HTMLDivElement>;
}

const AlbumPicture = ({
  image,
  photoWidth = 350,
  shellProps = {},
  closeable = true,
  maximizeable = false,
  descriptionProps = {},
}: AlbumPictureProps) => {
  return (
    <Shell
      shellTitle={`${image.title || image.src.split('/').pop()}`}
      onBodyClickAction={maximizeable ? 'maximize' : undefined}
      maximizeable={maximizeable}
      closeable={closeable}
      noPadding
      {...shellProps}
      className={cn(styles.photo, shellProps.className)}
      style={{ maxWidth: photoWidth, ...shellProps.style }}
    >
      <img
        className={maximizeable ? 'pointer' : ''}
        src={image.src}
        alt={image.title}
        width={photoWidth}
      />
      {image.description && (
        <div
          {...descriptionProps}
          style={{
            ...(image.description.length > 240 && { lineHeight: 0.8 }),
            ...descriptionProps.style,
          }}
        >
          {image.description}
        </div>
      )}
    </Shell>
  );
};

export default AlbumPicture;
