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
export const animeProviders: Record<AnimeProvidersNames, AnimeParser> = {
  gogoanime: new Gogoanime(),
  zoro: new ANIME.Zoro(),
  get default() {
    return this[animeProvider];
  },
};
// Manga =====================================================================//

export const mangaProviders: Record<MangaProvidersNames, MangaParser> = {
  mangadex: new MANGA.MangaDex(),
  mangasee123: new MANGA.Mangasee123(),
  get default() {
    return this[mangaProvider];
  },
};
