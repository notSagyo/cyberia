export type AnimeProvidersNames = 'gogoanime' | 'zoro' | 'default';

export type MangaProvidersNames =
  | 'mangadex'
  | 'mangahere'
  | 'mangakakalot'
  | 'mangasee123'
  | 'default';

export const animeProvider: Exclude<AnimeProvidersNames, 'default'> =
  'gogoanime';

export const mangaProvider: Exclude<MangaProvidersNames, 'default'> =
  'mangasee123';
