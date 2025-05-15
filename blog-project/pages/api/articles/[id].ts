
import { NextApiRequest, NextApiResponse } from 'next';
import articles from '../../../data/articles.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const article = articles.find((a) => a.id === id);
  if (article) {
    res.status(200).json(article);
  } else {
    res.status(404).json({ message: 'Article not found' });
  }
}
