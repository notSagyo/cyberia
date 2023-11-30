import { AnimeParser, MangaParser } from '@consumet/extensions/dist/models';
import ConsumetGogoanime from '@consumet/extensions/dist/providers/anime/gogoanime';
import Zoro from '@consumet/extensions/dist/providers/anime/zoro';
import MangaDex from '@consumet/extensions/dist/providers/manga/mangadex';
import Mangasee123 from '@consumet/extensions/dist/providers/manga/mangasee123';
import {
  AnimeProvidersNames,
  MangaProvidersNames,
  animeProvider,
  mangaProvider,
} from './consumet-service';

class Gogoanime extends ConsumetGogoanime {
  baseUrl = 'https://anitaku.to';
}

// Anime =====================================================================//
export const animeProviders = {
  gogoanime: new Gogoanime(),
  zoro: new Zoro(),
  get default() {
    return this[animeProvider];
  },
} satisfies Record<AnimeProvidersNames, AnimeParser>;
// Manga =====================================================================//

export const mangaProviders = {
  mangadex: new MangaDex(),
  mangasee123: new Mangasee123(),
  get default() {
    return this[mangaProvider];
  },
} satisfies Record<MangaProvidersNames, MangaParser>;
