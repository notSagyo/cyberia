import { IAnimeInfo, ISource } from '@consumet/extensions';
import { AnimeProvidersNames } from './consumet-service';
import animes from '/data/animes';
import { getAnimeInfoURL, getAnimeSourcesURL } from '/utils/urls';

class AnimeService {
  localIdToRemoteId(
    localId: string,
    provider: AnimeProvidersNames = 'default'
  ): string {
    return (
      animes[provider].find((anime) => anime.localId === localId)?.remoteId ||
      ''
    );
  }

  async fetchInfo(
    animeId: string,
    provider: AnimeProvidersNames
  ): Promise<IAnimeInfo | undefined> {
    return fetch(`${getAnimeInfoURL(provider)}/${animeId}`).then((res) =>
      res.json()
    );
  }

  async fetchSources(
    episodeId: string,
    provider: AnimeProvidersNames
  ): Promise<ISource | undefined> {
    return fetch(`${getAnimeSourcesURL(provider)}/${episodeId}`).then((res) =>
      res.json()
    );
  }
}

const animeService = new AnimeService();
export default animeService;
