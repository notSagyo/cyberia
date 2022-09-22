import { galleryURL } from '../../utils/url';
import { ShellProps } from '../Shell/Shell';
import styles from '/styles/album.module.scss';
import AlbumPicture from './AlbumPicture';
import { Fragment, HTMLAttributes } from 'react';
import LinkHeading from '../LinkHeading';
import { IAlbumImage } from '../../types';

interface AlbumProps {
  images: IAlbumImage[];
  albumTitle?: string;
  photoWidth?: number | string;
  // Shell
  shellProps?: ShellProps;
  descriptionProps?: HTMLAttributes<HTMLDivElement>;
  closeable?: boolean;
  maximizeable?: boolean;
  // Inject element at position
  putElementAtIndex?: {
    element: JSX.Element;
    position: number;
    mode: 'override' | 'prepend' | 'append';
  }[];
}

// TODO: Fix unique key on inserted element
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
        key={image.src}
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
      <LinkHeading
        href={galleryURL}
        anchorProps={{ className: styles.title }}
        goBack
      >
        {albumTitle || 'IMAGE VISUALIZER'}
      </LinkHeading>
      <div className={styles.body}>{albumImages}</div>
    </>
  );
};

export default Album;
