const domain = 'https://consumet-api.herokuapp.com';

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

export { getMangaSearch, getMangaInfo, getChapterPages };
