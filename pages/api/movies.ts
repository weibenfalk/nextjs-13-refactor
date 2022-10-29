// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
// API URLs
import { SEARCH_BASE_URL, POPULAR_BASE_URL } from '../../config';
// Basic fetchlay
import { basicFetch } from '../../api/fetchFunctions';
// Types
import { Movies } from '../../api/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Movies>) {
  const { page, search } = req.query; // Grab search params

  const endpoint: string = search ? `${SEARCH_BASE_URL}${search}&page=${page}` : `${POPULAR_BASE_URL}&page=${page}`;

  const data = await basicFetch<Movies>(endpoint);

  res.status(200).json(data);
}
