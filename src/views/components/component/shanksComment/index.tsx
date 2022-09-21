import { useEffect, useRef, useState } from 'react'
import { shanksContainer } from './style'
import { shanksWords } from '@/constant/shanksWords'
import { shuffleArray } from '@/utils/randomArray'

const shanks = shuffleArray(shanksWords)
export const ShanksComment = () => {
  const [shanksComment, setShanksComment] = useState('シャンクス')
  const shanksCount = useRef(0)
  useEffect(() => {
    const id = setInterval(() => {
      setShanksComment(shanks[shanksCount.current])
      shanksCount.current++
      console.log('test')
    }, 5000)

    return () => clearInterval(id)
  }, [])
  return (
    <div css={shanksContainer}>
      <p>{shanksComment}</p>
    </div>
  )
}
