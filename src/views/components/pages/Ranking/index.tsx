import type { DocumentData } from '@firebase/firestore'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { ranking } from './style'
// rankingページ
import { fetchData } from '@/utils/firestore'

export const Ranking: NextPage = () => {
  const [result, setResult] = useState<DocumentData[]>([])

  useEffect(() => {
    ;(async () => {
      const data = await fetchData()
      console.debug(data)
      setResult(data)
    })()
  }, [])

  return (
    <div css={ranking}>
      <p>ranking</p>
      <ul>
        {result.map((doc, i) => (
          <li key={i}>{doc.unit}</li>
        ))}
      </ul>
    </div>
  )
}
