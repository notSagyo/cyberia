import Link from 'next/link';
import { galleryURL } from '../../utils/url';
import Anchor from '../utils/anchor';
import { ShellProps } from '../shell/shell';
import styles from '/styles/album.module.scss';
import AlbumPicture from './album-picture';
import { Fragment, HTMLAttributes } from 'react';

interface AlbumProps {
  images: iAlbumImage[];
  albumTitle?: string;
  photoWidth?: number | string;
  shellProps?: ShellProps;
  descriptionProps?: HTMLAttributes<HTMLDivElement>;
  closeable?: boolean;
  maximizeable?: boolean;
  putElementAtIndex?: {
    element: JSX.Element;
    position: number;
    mode: 'override' | 'prepend' | 'append';
  }[];
}

// *TODO: Make images large on click
const Album = ({
  albumTitle,
  images,
  photoWidth = 350,
  shellProps = {},
  descriptionProps = {},
  closeable = true,
  maximizeable = false,
  putElementAtIndex = [],
}: AlbumProps) => {
  let albumImages: JSX.Element[] = [];

  albumImages = images.map((image, i) => {
    let pictureElement = (
      <AlbumPicture
        key={i}
        image={image}
        closeable={closeable}
        maximizeable={maximizeable}
        photoWidth={photoWidth}
        descriptionProps={descriptionProps}
        shellProps={shellProps}
      />
    );
    const elemAtIndex = putElementAtIndex.find((elem) => elem.position === i);
    if (elemAtIndex) {
      if (elemAtIndex.mode === 'override') pictureElement = elemAtIndex.element;
      else
        pictureElement = (
          <Fragment key={i}>
            {elemAtIndex.mode === 'prepend' && elemAtIndex.element}
            {pictureElement}
            {elemAtIndex.mode === 'append' && elemAtIndex.element}
          </Fragment>
        );
    }
    return pictureElement;
  });

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
