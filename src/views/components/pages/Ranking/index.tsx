import { DocumentData, query, orderBy } from '@firebase/firestore'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import {
  rankingItem,
  nameItem,
  dropSubItem,
  dropItem,
  jobItem,
  pictureSize,
  rankPic,
  rankStatus,
  ranking,
  wrapper,
  style,
  head,
  rank,
  headSub,
} from './style'
import { fetchData } from '@/utils/firestore'

export const Ranking: NextPage = () => {
  const [result, setResult] = useState<DocumentData[]>([])

  const jobStatus = ['海賊王', '四皇', '四皇', '四皇', '四皇']

  const rankingPic = [
    'https://cdn.amz.appget.com/c/wp-content/uploads/2016/05/12355.png',
    'https://moviewalker.jp/api/resizeimage/news/article/1096094/11007083?h=500',
    'https://renote.jp/files/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNFBIZGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--47a88b548199455c734af6acb257d6d3a54a6790/syankusu02.jpg',
    'https://d1e0nou58doauk.cloudfront.net/apprev/wp-content/uploads/2022/06/onepiece_shankusu_001.jpg',
    'https://comic-kingdom.jp/wp-content/uploads/2020/09/%E3%82%B7%E3%83%A3%E3%83%B3%E3%82%AF%E3%82%B9%EF%BC%96.jpg',
  ]

  const rankingStatus = [
    'https://frame-illust.com/fi/wp-content/uploads/2015/02/d2b697b8c5e98aeb37b4caa48729b5ca.png',
    'https://frame-illust.com/fi/wp-content/uploads/2015/02/bde6ddc8a65ea5436bed9ac7600eba05.png',
    'https://frame-illust.com/fi/wp-content/uploads/2015/02/b211351e2eabde63f5c8656807735a5b.png',
    'https://onwa-illust.com/wp-content/uploads/2020/06/medal_ribbon_icon_4.png',
    'https://onwa-illust.com/wp-content/uploads/2020/06/medal_ribbon_icon_5.png',
    'https://onwa-illust.com/wp-content/uploads/2020/06/medal_ribbon_icon_6-300x300.png',
    'https://chicodeza.com/wordpress/wp-content/uploads/gekkeijyu31.png',
    'https://chicodeza.com/wordpress/wp-content/uploads/gekkeijyu32.png',
    'https://chicodeza.com/wordpress/wp-content/uploads/gekkeijyu33.png',
    'https://chicodeza.com/wordpress/wp-content/uploads/gekkeijyu34.png',
  ]

  useEffect(() => {
    ;(async () => {
      const data = await fetchData()
      console.debug(data)
      setResult(data)
    })()
  }, [])

  useEffect(() => {
    console.log(result)
  }, [result])

  return (
    <div css={ranking}>
      <h1 css={head}>赤点ランキング</h1>
      <p css={headSub}>…最悪の世代へ</p>
      <ul css={style}>
        {result.map((doc, i) => (
          <div key={i}>
            <div>
              <a css={rank} href='#'>
                ☆{i + 1}位
              </a>
            </div>

            <div css={rankingItem}>
              <img css={rankStatus} src={rankingStatus[i]} />
              <img css={rankPic} src={rankingPic[i]} />
              <img
                css={pictureSize}
                src='http://blog-imgs-35.fc2.com/y/u/z/yuzudrops/20110911151248679.png'
              />
              <div css={wrapper}>
                <p css={jobItem}>{jobStatus[i]}</p>
                <p css={dropSubItem}>{doc.unit}</p>
                <p css={nameItem}>{doc.name}</p>
                <p css={dropItem}>score:{doc.score}</p>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}
