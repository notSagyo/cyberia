import type { NextApiRequest, NextApiResponse } from 'next';

type Data = string;

export default async function fetchUrl(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url } = req.query;
  const parsedUrl = parseUrl(url);
  if (!parsedUrl) return res.status(400).send('Error parsing URL');
  try {
    const response = await fetch(parsedUrl);
    const json = await response.json();
    return res.status(200).json(json);
  } catch (error) {
    if (error instanceof Error) {
      console.log(`(${url}): ${error.message}`);
      return res.send(error.message);
    }
  }
}

const parseUrl = (url?: string | string[]) => {
  if (url == null) return;

  // Make url a string
  let parsedUrl = '';
  if (Array.isArray(url)) parsedUrl = url.join('/');
  else if (typeof url == 'string') parsedUrl = url;

  // Should start with http, else prepend https
  if (!parsedUrl.startsWith('http')) parsedUrl = `https://${parsedUrl};`;
  return parsedUrl;
};
