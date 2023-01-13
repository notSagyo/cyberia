import { IEpisodeServer } from '@consumet/extensions/dist/models';
import type { NextApiRequest, NextApiResponse } from 'next';
import { AnimeProvidersNames } from '/services/consumet-service';
import { animeProviders } from '/services/consumet-service-server';
import { logRequestComplete, logRequestStart } from '/utils/console';

type Data = IEpisodeServer[] | string;

export default async function getEpisodeSources(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { episodeId, provider } = req.query;
  logRequestStart(episodeId, 'episodeId', provider);

  if (typeof episodeId !== 'string' || typeof provider !== 'string')
    return res.status(400).send('Error parsing episodeId');

  try {
    const animeServers = await animeProviders[
      provider as AnimeProvidersNames
    ].fetchEpisodeServers(episodeId);
    logRequestComplete(episodeId, 'episodeId', provider);
    if (animeServers.length === 0) {
      console.log('Servers not found for episodeId:', episodeId);
      return res.status(404).send('404: Servers not found');
    }
    return res.status(200).json(animeServers);
  } catch (error) {
    if (error instanceof Error) {
      console.log(`${error.message} (${episodeId})`);
      return res.send(error.message);
    }
  }
}
