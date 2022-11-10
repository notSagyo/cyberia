import { IMangaChapterPage } from '@consumet/extensions/dist/models';
import type { NextApiRequest, NextApiResponse } from 'next';
import { MangaProvidersNames } from '/services/consumet-service';
import { mangaProviders } from '/services/consumet-service-server';

type Data = IMangaChapterPage[] | string;

export default async function getChapterPages(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { provider, chapterId } = req.query;
  console.log(`Requested to (${provider}) chapter (${chapterId})`);
  if (typeof provider !== 'string' || typeof chapterId !== 'string')
    return res.status(400).send('Error parsing provider/chapterId');
  try {
    if (!Object.hasOwn(mangaProviders, provider))
      res.status(400).send('Invalid provider');
    const pages = await mangaProviders?.[
      provider as MangaProvidersNames
    ].fetchChapterPages(chapterId);
    console.log(`Request complete chapterId (${chapterId})`);
    return res.status(200).json(pages);
  } catch (error) {
    return res.send((error as Error).message);
  }
}
