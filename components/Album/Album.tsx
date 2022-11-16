import cn from 'classnames';
import React, { Fragment, HTMLAttributes } from 'react';
import { IAlbumImage } from '../../types/types';
import LinkHeading from '../LinkHeading/LinkHeading';
import { ShellProps } from '../Shell/Shell';
import styles from './Album.module.scss';
import AlbumPicture from './AlbumPicture';
import { galleryURL } from '/utils/urls';

interface AlbumProps extends React.HTMLAttributes<HTMLDivElement> {
  images: IAlbumImage[];
  albumTitle?: string;
  imageWidth?: number | string;
  // Shell
  shellProps?: ShellProps;
  descriptionProps?: HTMLAttributes<HTMLDivElement>;
  closeable?: boolean;
  maximizeable?: boolean;
  // Inject element at position
  putElementsAtIndex?: {
    element: JSX.Element;
    index: number;
    mode: 'override' | 'prepend' | 'append';
  }[];
}

// FIXME: Fix unique key on inserted element
const Album = ({
  albumTitle,
  images,
  imageWidth = 350,
  shellProps = {},
  descriptionProps = {},
  closeable = true,
  maximizeable = false,
  putElementsAtIndex = [],
  ...props
}: AlbumProps) => {
  let albumImages: JSX.Element[] = [];

  albumImages = images.map((image, i) => {
    let pictureElement = (
      <AlbumPicture
        key={image.src}
        image={image}
        closeable={closeable}
        maximizeable={maximizeable}
        photoWidth={imageWidth}
        descriptionProps={descriptionProps}
        shellProps={shellProps}
      />
    );

    const elemAtIndex = putElementsAtIndex.find((elem) => elem.index === i);
    if (elemAtIndex) {
      pictureElement = (
        <Fragment key={i}>
          {elemAtIndex.mode === 'prepend' && elemAtIndex.element}
          {elemAtIndex.mode === 'override'
            ? elemAtIndex.element
            : pictureElement}
          {elemAtIndex.mode === 'append' && elemAtIndex.element}
        </Fragment>
      );
    }

    return pictureElement;
  });

  return (
    <>
      <LinkHeading href={galleryURL} className={styles.title} goBack>
        {albumTitle || 'IMAGE_VISUALIZER'}
      </LinkHeading>
      <div {...props} className={cn(styles.body, props?.className)}>
        {albumImages}
      </div>
    </>
  );
};

export default Album;
