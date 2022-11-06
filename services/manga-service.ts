import MangaDex from '@consumet/extensions/dist/providers/manga/mangadex';
import MangaHere from '@consumet/extensions/dist/providers/manga/mangahere';
import MangaKakalot from '@consumet/extensions/dist/providers/manga/mangakakalot';
import Mangasee123 from '@consumet/extensions/dist/providers/manga/mangasee123';

export const mangadexProvider = new MangaDex();
export const mangahereProvider = new MangaHere();
export const mangakakalotProvider = new MangaKakalot();
export const mangaSeeProvider = new Mangasee123();

export const mangaProvider = mangadexProvider;

// import { MangaParser } from '@consumet/extensions/dist/models';
// import MangaDex from '@consumet/extensions/dist/providers/manga/mangadex';
// import MangaHere from '@consumet/extensions/dist/providers/manga/mangahere';
// import MangaKakalot from '@consumet/extensions/dist/providers/manga/mangakakalot';
// import Mangasee123 from '@consumet/extensions/dist/providers/manga/mangasee123';

// export type MangaProvidersNames =
//   | 'mangadex'
//   | 'mangahere'
//   | 'mangakakalot'
//   | 'mangasee123'
//   | 'default';

// export const defaultProvider: Exclude<MangaProvidersNames, 'default'> =
//   'mangadex';

// export const mangaProviders: Record<MangaProvidersNames, MangaParser> = {
//   mangadex: new MangaDex(),
//   mangahere: new MangaHere(),
//   mangakakalot: new MangaKakalot(),
//   mangasee123: new Mangasee123(),
//   get default() {
//     return this[defaultProvider];
//   },
// };
