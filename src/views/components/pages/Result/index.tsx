import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { result } from './style'
import { resultDataState } from '@/context/atoms'

export const Result: NextPage = () => {
  const resultData = useRecoilValue(resultDataState)
  const router = useRouter()

  function addRanking() {
    // firebaseにでーたをとばすしょり
    router.replace('/ranking')
  }

  return (
    <div css={result}>
      <div>result</div>
      <div>
        <p>{resultData.userName}</p>
        <p>{resultData.time}</p>
        <p>
          {resultData.breakUnit.map((unit, index) => {
            return (
              <div key={index}>
                <p>{unit}</p>
              </div>
            )
          })}
        </p>
        <p>{'ここにスコアが入ります'}</p>
        <button onClick={() => addRanking()}>ランキングに登録する</button>
      </div>
    </div>
  )
}
