export interface ISong {
  url: string;
  title: string;
  tag?: string;
  imageUrl?: string;
  source?: SongSource;
  res?: YtThumbnailQuality;
}

export type SongSource = 'youtube' | 'songcloud';

export type YtThumbnailQuality =
  | 'default'
  | 'sddefault'
  | 'mqdefault'
  | 'hqdefault'
  | 'maxresdefault';
