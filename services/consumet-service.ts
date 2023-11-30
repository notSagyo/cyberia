import { IMangaInfo } from '@consumet/extensions';
import { getMangaInfoURL } from '/utils/urls';

export type AnimeProvidersNames = 'gogoanime' | 'zoro' | 'default';
export type MangaProvidersNames = 'mangadex' | 'mangasee123' | 'default';

export const animeProvider: Exclude<AnimeProvidersNames, 'default'> =
  'gogoanime';
export const mangaProvider: Exclude<MangaProvidersNames, 'default'> =
  'mangasee123';

export const getMangaInfo = async (
  mangaId: string,
  provider: MangaProvidersNames = mangaProvider,
): Promise<IMangaInfo> => {
  return fetch(`${getMangaInfoURL(provider)}/${mangaId}`)
    .then((res) => res)
    .then((data) => data.json());
};
