import { useEffect, useRef, useState } from 'react'
import { shanksBox, shanksContainer, shanksTalk } from './style'
import { shanksWords } from '@/constant/shanksWords'
import { shuffleArray } from '@/utils/randomArray'

const shanks = shuffleArray(shanksWords)
export const ShanksComment = () => {
  const [shanksComment, setShanksComment] = useState(shanks[0])
  const shanksCount = useRef(1)
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
      <div css={shanksBox}>
        <p css={shanksTalk}>赤髪の男</p>
        <p css={shanksTalk}>『{shanksComment}』</p>
      </div>
    </div>
  )
}
