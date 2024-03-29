import { ISource } from '@consumet/extensions/dist/models';
import type { NextApiRequest, NextApiResponse } from 'next';
import { AnimeProvidersNames } from '/services/consumet-service';
import { animeProviders } from '/services/consumet-service-server';
import { logRequestComplete, logRequestStart } from '/utils/console';

type Data = ISource | string;

export default async function getEpisodeSources(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { episodeId, provider } = req.query;
  logRequestStart(episodeId, 'episodeId', provider);

  if (typeof episodeId !== 'string' || typeof provider !== 'string')
    return res.status(400).send('Error parsing episodeId');

  try {
    const animeSources = await animeProviders[
      provider as AnimeProvidersNames
    ].fetchEpisodeSources(episodeId);
    logRequestComplete(episodeId, 'episodeId', provider);
    if (animeSources.sources.length === 0) {
      console.log('Sources not found for episodeId:', episodeId);
      return res.status(404).send('404: Sources not found');
    }
    return res.status(200).json(animeSources);
  } catch (error) {
    if (error instanceof Error) {
      console.log(`${error.message} (${episodeId})`);
      return res.send(error.message);
    }
  }
}
