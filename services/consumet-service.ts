// !TODO: update consumet extensions
export type AnimeProvidersNames = 'gogoanime' | 'zoro' | 'default';

export type MangaProvidersNames = 'mangadex' | 'mangasee123' | 'default';

export const animeProvider: Exclude<AnimeProvidersNames, 'default'> =
  'gogoanime';

export const mangaProvider: Exclude<MangaProvidersNames, 'default'> =
  'mangadex';
