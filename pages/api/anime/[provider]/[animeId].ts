import { IAnimeInfo } from '@consumet/extensions/dist/models';
import type { NextApiRequest, NextApiResponse } from 'next';
import { AnimeProvidersNames } from '/services/consumet-service';
import { animeProviders } from '/services/consumet-service-server';

type Data = IAnimeInfo | string;

export default async function getAnimeInfo(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { animeId, provider } = req.query;
  console.log(`Requested to (${provider}) animeId (${animeId})`);

  if (typeof animeId !== 'string' || typeof provider !== 'string')
    return res.status(400).send('Error parsing animeId');

  try {
    const animeInfo = await animeProviders[
      provider as AnimeProvidersNames
    ].fetchAnimeInfo(animeId);
    console.log(`Request complete animeId (${animeId})`);
    return res.status(200).json(animeInfo);
  } catch (error) {
    if (error instanceof Error) {
      console.log(`${error.message} (${animeId})`);
      return res.send(error.message);
    }
  }
}
