import { Works } from '@/types/work_types'
import type { NextApiRequest, NextApiResponse } from 'next'
import works from "./works_data.json"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Works>
) {
  res.status(200).json(works)
}
