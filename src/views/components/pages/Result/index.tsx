import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import {
  buttonWrapper,
  dropSubUnit,
  dropUnit,
  dropUnitNum,
  head,
  header,
  headerSpan,
  rankButton,
  rankPost,
  result,
  span1,
  span2,
  span3,
  span4,
  span5,
  span6,
  span7,
  user,
  userInf,
  userScore,
} from './style'
import { resultDataState, ResultType } from '@/context/atoms'
import { putData } from '@/utils/firestore'

export const Result: NextPage = () => {
  const resultData = useRecoilValue(resultDataState)
  const router = useRouter()

  // const resultData: ResultType = {
  //   userName: 'よーくん',
  //   breakUnit: [
  //     'a',
  //     'b',
  //     'c',
  //     '情報ネットワーク',
  //     '情報ネットワーク',
  //     '情報ネットワーク',
  //     '情報ネットワーク',
  //     '情報ネットワーク',
  //     '情報ネットワーク',
  //     '情報ネットワーク',
  //     '情報ネットワーク',
  //     '情報ネットワーク',
  //     '情報ネットワーク',
  //     '情報ネットワーク',
  //     '情報ネットワーク',
  //   ],
  //   time: 42.5,
  // }

  const score = Math.floor(resultData.breakUnit.length * (1 / (resultData.time - 2.5)) * 1000)

  async function addRanking() {
    // firebaseにでーたをとばすしょり
    await putData({ name: resultData.userName, unit: resultData.breakUnit, score })
    router.push('/ranking')
  }
  //ダミーデータ

  return (
    <div>
      <div>
        <div css={head}>RESULT画面</div>
        {/* <div css={header}>
          <div css={headerSpan}>
            <span css={span1}>V</span>
            <span css={span2}>I</span>
            <span css={span3}>C</span>
            <span css={span4}>T</span>
            <span css={span5}>O</span>
            <span css={span6}>R</span>
            <span css={span7}>Y</span>
          </div>
        </div> */}
      </div>
      <div>
        <p css={user}>ユーザネーム</p>
        <p css={userInf}>{resultData.userName}</p>
        <p css={user}>かかった時間</p>
        <p css={userInf}>{resultData.time}秒</p>
        <div>
          <div css={dropUnit}>落とした教科</div>
          {resultData.breakUnit.map((unit, index) => {
            return (
              <div css={dropSubUnit} key={index}>
                ・{unit}
              </div>
            )
          })}
        </div>
        <div css={dropUnitNum}>落とした教科数：{resultData.breakUnit.length}</div>
        <p css={userScore}>あなたのスコア：{score}</p>
        <div css={buttonWrapper}>
          <button css={rankButton} onClick={() => addRanking()}>
            <div css={rankPost}>ランキングに登録する</div>
          </button>
          <button css={rankButton} onClick={() => addRanking()}>
            <div css={rankPost} onClick={() => router.push('/')}>
              リトライ
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
