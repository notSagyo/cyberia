import MangaDex from '@consumet/extensions/dist/providers/manga/mangadex';
// import MangaHere from '@consumet/extensions/dist/providers/manga/mangahere';
// import MangaKakalot from '@consumet/extensions/dist/providers/manga/mangakakalot';

const mangadexProvider = new MangaDex();
// const mangahereProvider = new MangaHere();
// const mangakakalotProvider = new MangaKakalot();

export const mangaProvider = mangadexProvider;
