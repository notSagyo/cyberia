import MangaDex from '@consumet/extensions/dist/providers/manga/mangadex';
// import MangaHere from '@consumet/extensions/dist/providers/manga/mangahere';
// import MangaKakalot from '@consumet/extensions/dist/providers/manga/mangakakalot';

export const mangaProviders = {
  mangadexProvider: new MangaDex(),
  // mangahereProvider: new MangaHere(),
  // mangakakalotProvider: new MangaKakalot(),
};

export const mangaProvider = mangaProviders.mangadexProvider;
