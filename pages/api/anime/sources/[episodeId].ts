import { ISource } from '@consumet/extensions/dist/models';
import type { NextApiRequest, NextApiResponse } from 'next';
import { provider } from '../../../../services/anime-service';

type Data = ISource | string;

export default async function getAnimeInfo(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { episodeId } = req.query;
  console.log('Requested episodeId:', episodeId);
  if (typeof episodeId !== 'string')
    return res.status(400).send('Error parsing episodeId');
  try {
    const animeSources = await provider.fetchEpisodeSources(episodeId);
    console.log('Request complete episodeId:', episodeId);
    return res.status(200).json(animeSources);
  } catch (error) {
    return res.send((error as Error).message);
  }
}
