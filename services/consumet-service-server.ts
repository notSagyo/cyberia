import { ANIME, MANGA } from '@consumet/extensions';
import { AnimeParser, MangaParser } from '@consumet/extensions/dist/models';
import {
  AnimeProvidersNames,
  MangaProvidersNames,
  animeProvider,
  mangaProvider,
} from './consumet-service';

class Gogoanime extends ANIME.Gogoanime {
  baseUrl = 'https://anitaku.to';
}

// Anime =====================================================================//
export const animeProviders = {
  gogoanime: new Gogoanime(),
  zoro: new ANIME.Zoro(),
  get default() {
    return this[animeProvider];
  },
} satisfies Record<AnimeProvidersNames, AnimeParser>;
// Manga =====================================================================//

export const mangaProviders = {
  mangadex: new MANGA.MangaDex(),
  mangasee123: new MANGA.Mangasee123(),
  get default() {
    return this[mangaProvider];
  },
} satisfies Record<MangaProvidersNames, MangaParser>;
