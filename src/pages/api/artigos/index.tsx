import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET': {
    }
    case 'POST':
      return res.status(200).json({ message: 'POST' });
    default:
      return res.status(200).json({ message: 'default' });
  }
}
