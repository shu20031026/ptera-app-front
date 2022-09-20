import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const dummyRanking: any = [
      {
        name: 'よーくん',
        score: 100,
        droppedUnit: 1,
        unit: ['微積'],
        id: 1,
      },
      {
        name: 'よーくん',
        score: 50,
        droppedUnit: 2,
        unit: ['微積', '物理'],
        id: 2,
      },
    ]

    res.status(200).json(dummyRanking)
  }
  res.status(200)
}
