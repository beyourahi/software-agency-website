import { Member, Review, Work } from "../../types";
import type { NextApiRequest, NextApiResponse } from "next";
import data from "./data.json";

interface DataProps {
  members: Member[];
  works: Work[];
  brands: string[];
  reviews: Review[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse<DataProps>) {
  res.status(200).json(data);
}
