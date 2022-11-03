import MangaDex from '@consumet/extensions/dist/providers/manga/mangadex';
import MangaHere from '@consumet/extensions/dist/providers/manga/mangahere';
import MangaKakalot from '@consumet/extensions/dist/providers/manga/mangakakalot';
import Mangasee123 from '@consumet/extensions/dist/providers/manga/mangasee123';

export const mangadexProvider = new MangaDex();
export const mangahereProvider = new MangaHere();
export const mangakakalotProvider = new MangaKakalot();
export const mangaSeeProvider = new Mangasee123();

export const mangaProvider = mangadexProvider;
