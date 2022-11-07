import { IAnimeInfo } from '@consumet/extensions/dist/models';
import type { NextApiRequest, NextApiResponse } from 'next';
import { animeProviders } from '/services/consumet-service-server';

type Data = IAnimeInfo | string;

export default async function getAnimeInfo(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { animeId } = req.query;
  console.log('Requested animeId:', animeId);
  if (typeof animeId !== 'string')
    return res.status(400).send('Error parsing animeId');
  try {
    const animeInfo = await animeProviders.default.fetchAnimeInfo(animeId);
    console.log('Request complete animeId:', animeId);
    return res.status(200).json(animeInfo);
  } catch (error) {
    return res.send((error as Error).message);
  }
}
