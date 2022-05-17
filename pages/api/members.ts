import type { NextApiRequest, NextApiResponse } from 'next'
import { Members } from '@/types/member_types'
import members from "./members_data.json"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Members>
) {
  res.status(200).json(members)
}
