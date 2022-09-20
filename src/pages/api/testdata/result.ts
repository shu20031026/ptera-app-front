import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    res.status(200).json(['success'])
  } else {
    res.status(200).json(['success'])
  }
  res.status(200)
}
