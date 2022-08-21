import cn from 'classnames';
import Link from 'next/link';
import { galleryURL } from '../utils/url';
import Anchor from './anchor';
import Shell, { ShellProps } from './shell/shell';
import styles from '/styles/album.module.scss';

interface AlbumProps {
  images: iAlbumImage[];
  albumTitle?: string;
  photoWidth?: number | string;
  shellProps?: ShellProps;
  descriptionClassname?: string;
}

// *TODO: Make images large on click
const Album = ({
  albumTitle,
  images,
  photoWidth = 350,
  shellProps = {},
  descriptionClassname = '',
}: AlbumProps) => {
  let albumImages: JSX.Element[] = [];

  albumImages = images.map((image, i) => (
    <Shell
      key={i}
      noPadding
      shellTitle={`${image.title || image.src.split('/').pop()}`}
      {...shellProps}
      className={cn(styles.photo, shellProps.className)}
      style={{ maxWidth: photoWidth, ...shellProps.style }}
    >
      <Anchor href={image.src} rel="noreferrer" target="_blank">
        <img src={image.src} alt={image.title} width={photoWidth} />
      </Anchor>
      {image.description && (
        <div
          className={descriptionClassname}
          style={{
            ...(image.description.length > 225 && { lineHeight: 0.8 }),
          }}
        >
          {image.description}
        </div>
      )}
    </Shell>
  ));

  return (
    <>
      <h1 className={`${styles.title} h2`}>
        <Link href={galleryURL} passHref>
          <Anchor className="green">{albumTitle || 'IMAGE VISUALIZER'}</Anchor>
        </Link>
      </h1>
      <div className={styles.body}>{albumImages}</div>
    </>
  );
};

export default Album;
