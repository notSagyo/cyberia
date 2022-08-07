/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { getImagesNamesInFolder } from '../utils/utils';
import Anchor from './anchor';
import Shell, { ShellProps } from './shell/shell';
import styles from '/styles/album.module.scss';

interface AlbumProps {
  title?: string;
  images?: iAlbumImage[];
  imagesFolderPath?: string;
  photoWidth?: number | string;
  shellProps?: ShellProps;
  descriptionClassname?: string;
}

const Album = ({
  title,
  images,
  imagesFolderPath,
  photoWidth = 350,
  shellProps = {},
  descriptionClassname = '',
}: AlbumProps) => {
  const relativePath = imagesFolderPath ? `../public${imagesFolderPath}` : '';
  const imagesName = getImagesNamesInFolder(relativePath);
  let albumImages: JSX.Element[] = [];

  // If images are provided, use them.
  if (images && images.length > 0) {
    albumImages = images.map((image, i) => (
      <Shell
        {...shellProps}
        shellTitle={`${image.title || image.path.split('/').pop()}`}
        className={styles.photo}
        style={{ maxWidth: photoWidth, ...shellProps.style }}
        noPadding
        key={i}
      >
        <Anchor href={image.path} rel="noreferrer" target="_blank">
          <img src={image.path} alt={image.title} width={photoWidth} />
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
  }
  // If images folder is provided, use them instead.
  else if (imagesFolderPath) {
    albumImages = imagesName.map((name, i) => (
      <Shell
        {...shellProps}
        title={`${name.toLocaleLowerCase()}`}
        className={styles.photo}
        style={{ maxWidth: photoWidth }}
        noPadding
        key={i}
      >
        <Anchor href={`/img/omori/${name}`} rel="noreferrer" target="_blank">
          <img src={`/img/omori/${name}`} alt={name} width={photoWidth} />
        </Anchor>
      </Shell>
    ));
  }

  return (
    <>
      <h1 className={`${styles.title} h2`}>
        <Link href="/gallery" passHref>
          <Anchor className="green">{title || relativePath || 'Album'}</Anchor>
        </Link>
      </h1>
      <div className={styles.body}>{albumImages}</div>
    </>
  );
};

export default Album;
