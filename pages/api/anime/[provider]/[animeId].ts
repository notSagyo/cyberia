import { IAnimeInfo } from '@consumet/extensions/dist/models';
import type { NextApiRequest, NextApiResponse } from 'next';
import { AnimeProvidersNames } from '/services/consumet-service';
import { animeProviders } from '/services/consumet-service-server';
import { logRequestComplete, logRequestStart } from '/utils/console';

type Data = IAnimeInfo | string;

export default async function getAnimeInfo(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { animeId, provider } = req.query;
  logRequestStart(animeId, 'animeId', provider);

  if (typeof animeId !== 'string' || typeof provider !== 'string')
    return res.status(400).send('Error parsing animeId');

  try {
    const animeInfo = await animeProviders[
      provider as AnimeProvidersNames
    ].fetchAnimeInfo(animeId);
    logRequestComplete(animeId, 'animeId', provider);
    return res.status(200).json(animeInfo);
  } catch (error) {
    if (error instanceof Error) {
      console.log(`${error.message} (${animeId})`);
      return res.send(error.message);
    }
  }
}
