import { NextPage } from 'next'
import { useRecoilValue } from 'recoil'
import { result } from './style'
import { resultDataState } from '@/context/atoms'

export const Result: NextPage = () => {
  const resultData = useRecoilValue(resultDataState)
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
      </div>
    </div>
  )
}
