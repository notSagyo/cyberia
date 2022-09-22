export interface IAlbumImage {
  src: string;
  title?: string;
  description?: string;
}

export type YtThumbnailQuality =
  | 'default'
  | 'sddefault'
  | 'mqdefault'
  | 'hqdefault'
  | 'maxresdefault';

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
