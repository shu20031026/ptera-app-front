import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { result } from './style'
import { resultDataState, ResultType } from '@/context/atoms'

export const Result: NextPage = () => {
  // const resultData = useRecoilValue(resultDataState)
  const router = useRouter()

  function addRanking() {
    // firebaseにでーたをとばすしょり
    router.replace('/ranking')
  }
  //ダミーデータ
  const resultData: ResultType = {
    userName: 'よーくん',
    breakUnit: ['微積', '代数幾何', '情報ネットワーク'],
    time: 50,
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
        <p>{'ここにスコアを求める関数の結果が入ります'}</p>
        <button onClick={() => addRanking()}>ランキングに登録する</button>
      </div>
    </div>
  )
}
