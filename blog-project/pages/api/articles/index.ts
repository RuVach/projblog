
import { NextApiRequest, NextApiResponse } from 'next';
import articles from '../../../data/articles.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(articles);
}
