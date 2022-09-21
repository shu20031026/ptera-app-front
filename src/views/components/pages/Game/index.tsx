import type { NextPage } from 'next'
import { useRecoilValue } from 'recoil'
import { ShanksComment } from '../../component/shanksComment'
import SketchComponent from './Sketch'
import { game } from './style'
import { userDataState } from '@/context/atoms'

// gameページ
export const Game: NextPage = () => {
  const userData = useRecoilValue(userDataState)
  const userList = userData.unitList
  console.log(userList)
  return (
    <div css={game} id='canvas-parent'>
      <ShanksComment />
      <SketchComponent {...userList} />
    </div>
  )
}
