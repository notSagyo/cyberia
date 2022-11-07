import { IMangaInfo } from '@consumet/extensions/dist/models';
import type { NextApiRequest, NextApiResponse } from 'next';
import { MangaProvidersNames } from '/services/consumet-service';
import { mangaProviders } from '/services/consumet-service-server';

type Data = IMangaInfo | string;

export default async function getMangaInfo(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { provider, mangaId } = req.query;
  if (typeof provider !== 'string' || typeof mangaId !== 'string')
    return res.status(400).send('Error parsing provider / mangaId');
  try {
    if (!Object.hasOwn(mangaProviders, provider))
      res.status(400).send('Invalid provider');
    const mangaInfo = await mangaProviders[
      mangaId as MangaProvidersNames
    ].fetchMangaInfo(mangaId);
    return res.status(200).json(mangaInfo);
  } catch (error) {
    return res.send((error as Error).message);
  }
}
