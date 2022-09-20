import type { NextPage } from 'next'
import SketchComponent from './Sketch'
import { game } from './style'

// gameページ
export const Game: NextPage = () => {
  return (
    <div css={game} id='canvas-parent'>
      <SketchComponent />
    </div>
  )
}
