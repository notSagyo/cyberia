import fs from 'fs';
import path from 'path';

const domain = 'https://sagyo-consumet.herokuapp.com';

const getMangaSearch = async (
  mangaTitle: string
): Promise<MangadexSearchResult | undefined> => {
  console.log(`Searching manga matching "${mangaTitle}" on Mangadex`);
  let results: Promise<MangadexSearchResult | undefined> = fetch(
    `${domain}/manga/mangadex/${mangaTitle}`
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) =>
      console.error(`Error while searching for: "${mangaTitle}"`, err)
    );
  return results;
};

const getMangaInfo = async (
  mangaId: string
): Promise<MangadexMangaInfo | undefined> => {
  console.log(`Getting manga info for manga "${mangaId}" on Mangadex`);
  console.log(`  -Request: ${domain}/manga/mangadex/info/${mangaId}`);
  let results: Promise<MangadexMangaInfo | undefined> = fetch(
    `${domain}/manga/mangadex/info/${mangaId}`
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) =>
      console.error(`Error while getting info for: "${mangaId}"`, err)
    );
  return results;
};

const getChapterPages = async (
  chapterId: string
): Promise<MangadexChapterPage[] | undefined> => {
  console.log(`Getting pages for chapter "${chapterId}" on Mangadex`);
  console.log(`  -Request: ${domain}/manga/mangadex/read/${chapterId}`);
  let results: Promise<MangadexChapterPage[] | undefined> = fetch(
    `${domain}/manga/mangadex/read/${chapterId}`
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) =>
      console.error(
        `Error while getting chapters pages for: "${chapterId}"`,
        err
      )
    );
  return results;
};

const cachePath = path.join(process.cwd(), '/data/temp');
const pagesCachePath = path.join(cachePath, '/chapters-pages.json');

const apiCache = {
  clearCache: async () => {
    console.log('Clearing cache...');
    return fs.promises.writeFile(pagesCachePath, JSON.stringify({}));
  },

  hasCache: (mangaId: string) => {
    const cache = fs.readFileSync(pagesCachePath);
    let cacheParsed: { [key: string]: MangadexChapterPage[] } = {};

    try {
      cacheParsed = JSON.parse(cache.toString());
    } catch (err) {
      console.log(err);
    }

    const hasCache =
      cacheParsed[mangaId] != undefined &&
      cacheParsed[mangaId]?.[0]?.img != undefined;

    return hasCache;
  },

  setChaptersPages: async (chapterId: string, pages: MangadexChapterPage[]) => {
    const cache = await fs.promises.readFile(pagesCachePath);
    let cacheParsed: { [key: string]: MangadexChapterPage[] } = {};

    try {
      const cacheString = cache.toString();
      cacheString.length > 1 && (cacheParsed = JSON.parse(cacheString));
    } catch (err) {
      console.log(err);
    }

    cacheParsed[chapterId] = pages;
    await fs.promises.writeFile(pagesCachePath, JSON.stringify(cacheParsed));
  },
};

export { getMangaSearch, getMangaInfo, getChapterPages, apiCache };
