// ?TODO: Make request to anilist instead ?
const fetchGogoanimeReferer = async (episodeId: string) => {
  console.log(`Fetching episode "${episodeId}" from Gogoanime`);
  let src: Promise<string | void> = fetch(
    `https://consumet-api.herokuapp.com/anime/gogoanime/watch/${episodeId}`
  )
    .then((res) => res.json())
    .then((data) => {
      return data.headers.Referer;
    })
    .catch((err) => console.error('Error while getting episode:', err));
  return src;
};

const fetchGogoanimeInfo = async (animeId: string) => {
  console.log(`Fetching anime info for "${animeId}" from Gogoanime`);
  let info: Promise<Record<string, unknown> | undefined> = fetch(
    `https://consumet-api.herokuapp.com/anime/gogoanime/info/${animeId}`
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error('Error while getting episode:', err));
  return info;
};

const fetchGogoanimeEpisodes = async (
  animeId: string
): Promise<Record<string, unknown> | undefined> => {
  console.log(`Fetching anime episodes for "${animeId}" from Gogoanime`);
  const animeInfo = await fetchGogoanimeInfo(animeId);
  const episodes = animeInfo?.episodes as Record<string, unknown> | undefined;
  return episodes;
};

const fetchGogoanimeTotalEpisodes = async (
  animeId: string
): Promise<number | undefined> => {
  console.log(`Fetching episode count for "${animeId}" from Gogoanime`);
  const animeInfo = await fetchGogoanimeInfo(animeId);
  const episodes = animeInfo?.totalEpisodes as number | undefined;
  return episodes;
};

export {
  fetchGogoanimeReferer,
  fetchGogoanimeInfo,
  fetchGogoanimeEpisodes,
  fetchGogoanimeTotalEpisodes,
};
