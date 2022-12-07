import { IMangaInfo } from '@consumet/extensions/dist/models';
import type { NextApiRequest, NextApiResponse } from 'next';
import { MangaProvidersNames } from '/services/consumet-service';
import { mangaProviders } from '/services/consumet-service-server';
import { logRequestComplete, logRequestStart } from '/utils/console';

type Data = IMangaInfo | string;

export default async function getMangaInfo(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { provider, mangaId } = req.query;
  logRequestStart(mangaId, 'mangaId', provider);

  if (typeof provider !== 'string' || typeof mangaId !== 'string')
    return res.status(400).send('Error parsing provider / mangaId');

  try {
    if (!Object.hasOwn(mangaProviders, provider))
      res.status(400).send('Invalid provider');
    const mangaInfo = await mangaProviders[
      provider as MangaProvidersNames
    ].fetchMangaInfo(mangaId);
    logRequestComplete(mangaId, 'mangaId', provider);
    return res.status(200).json(mangaInfo);
  } catch (error) {
    return res.send((error as Error).message);
  }
}
