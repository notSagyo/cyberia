import type { NextApiRequest, NextApiResponse } from 'next';

type Data = string;

export default async function ip(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const ip = req.socket.remoteAddress || '';
  if (!ip) res.status(500).send("Can't parse IP");
  return res.status(200).send(JSON.stringify({ ip }));
}
