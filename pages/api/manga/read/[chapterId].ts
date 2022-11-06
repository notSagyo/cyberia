import { IMangaChapterPage } from '@consumet/extensions/dist/models';
import type { NextApiRequest, NextApiResponse } from 'next';
import { mangaProvider } from '/services/manga-service';

type Data = IMangaChapterPage[] | string;

export default async function getChapterPages(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { chapterId } = req.query;
  if (typeof chapterId !== 'string')
    return res.status(400).send('Error parsing chapterId');
  try {
    const pages = await mangaProvider.fetchChapterPages(chapterId);
    return res.status(200).json(pages);
  } catch (error) {
    return res.send((error as Error).message);
  }
}
