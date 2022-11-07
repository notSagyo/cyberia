import { AnimeParser, MangaParser } from '@consumet/extensions/dist/models';
import Gogoanime from '@consumet/extensions/dist/providers/anime/gogoanime';
import Zoro from '@consumet/extensions/dist/providers/anime/zoro';
import MangaDex from '@consumet/extensions/dist/providers/manga/mangadex';
import MangaHere from '@consumet/extensions/dist/providers/manga/mangahere';
import MangaKakalot from '@consumet/extensions/dist/providers/manga/mangakakalot';
import Mangasee123 from '@consumet/extensions/dist/providers/manga/mangasee123';
import {
  animeProvider,
  AnimeProvidersNames,
  mangaProvider,
  MangaProvidersNames,
} from './consumet-service';

// Manga =====================================================================//
export const mangaProviders: Record<MangaProvidersNames, MangaParser> = {
  mangadex: new MangaDex(),
  mangahere: new MangaHere(),
  mangakakalot: new MangaKakalot(),
  mangasee123: new Mangasee123(),
  get default() {
    return this[mangaProvider];
  },
};

// Anime =====================================================================//
export const animeProviders: Record<AnimeProvidersNames, AnimeParser> = {
  gogoanime: new Gogoanime(),
  zoro: new Zoro(),
  get default() {
    return this[animeProvider];
  },
};
