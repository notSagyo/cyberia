import { IAnimeInfo, ISource } from '@consumet/extensions';
import { AnimeProvidersNames } from './consumet-service';
import { getAnimeInfoURL, getAnimeSourcesURL } from '/utils/urls';

class AnimeService {
  fetchInfo = async (
    animeId: string,
    provider: AnimeProvidersNames
  ): Promise<IAnimeInfo | undefined> => {
    return fetch(`${getAnimeInfoURL(provider)}/${animeId}`).then((res) =>
      res.json()
    );
  };

  fetchSources = async (
    episodeId: string,
    provider: AnimeProvidersNames
  ): Promise<ISource | undefined> => {
    return fetch(`${getAnimeSourcesURL(provider)}/${episodeId}`).then((res) =>
      res.json()
    );
  };
}

const animeService = new AnimeService();
export default animeService;
