import {
  AnimeProvidersNames,
  MangaProvidersNames,
} from '/services/consumet-service';

// LOCAL =====================================================================//
export const baseURL = '';

// GALLERY
export const galleryURL = `${baseURL}/gallery`;
export const hectorURL = `${galleryURL}/hector`;

// VIDEOS
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

// READ
export const readURL = `${baseURL}/read`;
export const mangaURL = `${readURL}/manga`;

// STUFF
export const stuffURL = `${baseURL}/stuff`;
export const bdayURL = `${baseURL}/bday`;
export const bartenderURL = `${baseURL}/bartender`;
export const citiesURL = `${baseURL}/cities`;
export const fortuneURL = `${baseURL}/fortune`;
export const getMeOutURL = `${baseURL}/getmeout`;
export const matrixURL = `${baseURL}/matrix`;
export const weirdURL = `${baseURL}/weird`;

// API =======================================================================//
export const apiURL = `${baseURL}/api`;
export const ipURL = `${apiURL}/ip`;
export const fetchURL = `${apiURL}/fetch`;
export const getAnimeInfoURL = (provider: AnimeProvidersNames) =>
  `${apiURL}/anime/${provider}`;
export const getAnimeSourcesURL = (provider: AnimeProvidersNames) =>
  `${getAnimeInfoURL(provider)}/sources`;
export const getAnimeServersURL = (provider: AnimeProvidersNames) =>
  `${getAnimeInfoURL(provider)}/servers`;
export const getMangaInfoURL = (provider: MangaProvidersNames) =>
  `${apiURL}/manga/${provider}`;
export const getMangaReadURL = (provider: MangaProvidersNames) =>
  `${getMangaInfoURL(provider)}/read`;

// OTHER =====================================================================//
export const corsProxy = 'https://cors.consumet.stream/';
