export interface IAlbumImage {
  src: string;
  title?: string;
  description?: string;
}

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
