import {
  AnimeProvidersNames,
  MangaProvidersNames,
} from '/services/consumet-service';

// LOCAL
export const baseURL = '';

export const videosURL = `${baseURL}/videos`;
export const animeURL = `${videosURL}/anime`;
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
export const animeInfoURL = (provider: AnimeProvidersNames) =>
  `${apiURL}/anime/${provider}`;
export const animeSourcesURL = (provider: AnimeProvidersNames) =>
  `${animeInfoURL(provider)}/sources`;
export const getMangaInfoURL = (provider: MangaProvidersNames) =>
  `${apiURL}/manga/${provider}`;
export const getMangaReadURL = (provider: MangaProvidersNames) =>
  `${getMangaInfoURL(provider)}/read`;

// OTHER
export const corsProxy = 'https://cors.proxy.consumet.org/';
