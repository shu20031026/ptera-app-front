import type { NextApiRequest, NextApiResponse } from "next";

type DataItem = {
  name: string;
};

type Data = DataItem[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([{ name: "yo kun" }]);
}
