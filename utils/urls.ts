import {
  AnimeProvidersNames,
  MangaProvidersNames,
} from '/services/consumet-service';

// LOCAL
export const baseURL = '';

export const videosURL = `${baseURL}/videos`;
export const animeURL = `${videosURL}/anime`;
export const getAnimeProviderURL = (provider: AnimeProvidersNames) =>
  `${animeURL}/${provider}`;
export const getAnimeEpisodeURL = (
  provider: AnimeProvidersNames,
  animeId: string,
  episodeId: string
) => `${getAnimeProviderURL(provider)}/${animeId}/${episodeId}`;
export const surfaceURL = `${videosURL}/surface`;

export const readURL = `${baseURL}/read`;
export const mangaURL = `${readURL}/manga`;

export const galleryURL = `${baseURL}/gallery`;
export const fortuneURL = `${baseURL}/fortune`;
export const hectorURL = `${galleryURL}/hector`;
export const bartenderURL = `${baseURL}/bartender`;
export const getMeOutURL = `${baseURL}/getmeout`;
export const matrixURL = `${baseURL}/matrix`;

// API
export const apiURL = `${baseURL}/api`;
export const ipUrl = `${apiURL}/ip`;
export const fetchUrl = `${apiURL}/fetch`;
export const getAnimeInfoURL = (provider: AnimeProvidersNames) =>
  `${apiURL}/anime/${provider}`;
export const getAnimeSourcesURL = (provider: AnimeProvidersNames) =>
  `${getAnimeInfoURL(provider)}/sources`;
export const getMangaInfoURL = (provider: MangaProvidersNames) =>
  `${apiURL}/manga/${provider}`;
export const getMangaReadURL = (provider: MangaProvidersNames) =>
  `${getMangaInfoURL(provider)}/read`;

// OTHER
export const corsProxy = 'https://cors.proxy.consumet.org/';
