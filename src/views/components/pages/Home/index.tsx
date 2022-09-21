import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import {
  addFormButton,
  gameTitle,
  homeContainer,
  homeWrapper,
  inputItem,
  nameInput,
  startButton,
  unitListContainer,
} from './style'
import { userDataState } from '@/context/atoms'

// homeページ
export const Home: NextPage = () => {
  const [player, setPlayer] = useState<string>('')
  const [unitList, setUnitList] = useState<string[]>([''])
  const setUserData = useSetRecoilState(userDataState)
  const router = useRouter()

  function addUnit() {
    setUnitList((prev) => [...prev, ''])
  }

  function editUnit(index: number, value: string) {
    const temp = [...unitList]
    temp[index] = value
    setUnitList(temp)
  }

  function sendUserData() {
    setUserData({
      userName: player,
      unitList,
    })
    router.replace('/game')
  }

  return (
    <div css={homeContainer}>
      <div css={homeWrapper}>
        <h1 css={gameTitle}>ゲームタイトル</h1>
        <div>
          <input
            css={nameInput}
            onChange={(e) => setPlayer(e.target.value)}
            placeholder='名前を入力してください'
          />
        </div>
        <div css={unitListContainer}>
          {unitList.map((value, index) => {
            return (
              <input
                css={inputItem}
                key={index}
                onChange={(e) => editUnit(index, e.target.value)}
                value={value}
                placeholder='講義名を入力してください'
              />
            )
          })}
          {unitList.length < 20 && (
            <button css={addFormButton} onClick={() => addUnit()}>
              受ける講義を追加する
            </button>
          )}
        </div>
        <button
          css={startButton}
          onClick={() => {
            sendUserData()
          }}
        >
          ゲームスタート
        </button>
      </div>
    </div>
  )
}
