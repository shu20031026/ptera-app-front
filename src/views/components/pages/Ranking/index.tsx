import type { NextPage } from 'next'
import { ranking, rankingItem, userItem } from './style'
import { useEffect, useState } from 'react'
import type { DocumentData } from '@firebase/firestore'
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
      <ul>
        {result.map((doc, i) => (
          <div key={i} css={rankingItem}>
            <img src='https://chie-pctr.c.yimg.jp/dk/iwiz-chie/que-14202085434?w=200&h=200&up=0' />
            {i + 1}位☆<div css={userItem}>名前：{doc.name}</div>
            <div css={userItem}>落とした教科数：{doc.droppedUnit}</div>
            <div css={userItem}>落とした教科：{doc.unit}</div>
          </div>
        ))}
      </ul>
    </div>
  )
}
