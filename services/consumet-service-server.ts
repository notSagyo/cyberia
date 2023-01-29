import { ANIME, MANGA } from '@consumet/extensions';
import { AnimeParser, MangaParser } from '@consumet/extensions/dist/models';
import {
  animeProvider,
  AnimeProvidersNames,
  mangaProvider,
  MangaProvidersNames,
} from './consumet-service';

// Anime =====================================================================//
export const animeProviders: Record<AnimeProvidersNames, AnimeParser> = {
  gogoanime: new ANIME.Gogoanime(),
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
