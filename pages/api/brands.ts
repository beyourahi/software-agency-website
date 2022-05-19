import { Brands } from '@/types/brands_types'
import type { NextApiRequest, NextApiResponse } from 'next'
import brands from "./brands_data.json"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Brands>
) {
  res.status(200).json(brands)
}
