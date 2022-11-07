import { ISource } from '@consumet/extensions/dist/models';
import type { NextApiRequest, NextApiResponse } from 'next';
import { animeProvider } from '/services/consumet-service';
import { animeProviders } from '/services/consumet-service-server';

type Data = ISource | string;

export default async function getEpisodeSources(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { episodeId } = req.query;
  console.log(`Requested to (${animeProvider}) episodeId (${episodeId})`);
  if (typeof episodeId !== 'string')
    return res.status(400).send('Error parsing episodeId');
  try {
    const animeSources = await animeProviders.default.fetchEpisodeSources(
      episodeId
    );
    console.log(`Request complete episodeId (${episodeId})`);
    if (animeSources.sources.length === 0) {
      console.log('Sources not found for episodeId:', episodeId);
      return res.status(404).send('404: Sources not found');
    }
    return res.status(200).json(animeSources);
  } catch (error) {
    return res.send((error as Error).message);
  }
}
