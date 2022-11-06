import { IMangaInfo } from '@consumet/extensions/dist/models';
import type { NextApiRequest, NextApiResponse } from 'next';
import { mangaProvider } from '/services/manga-service';

type Data = IMangaInfo | string;

export default async function getMangaInfo(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { mangaId } = req.query;
  if (typeof mangaId !== 'string')
    return res.status(400).send('Error parsing mangaId');
  try {
    const mangaInfo = await mangaProvider.fetchMangaInfo(mangaId);
    return res.status(200).json(mangaInfo);
  } catch (error) {
    return res.send((error as Error).message);
  }
}
