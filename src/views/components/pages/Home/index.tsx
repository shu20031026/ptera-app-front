import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { createRef, RefObject, useRef, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import {
  addFormButton,
  gameTitle,
  homeContainer,
  homeWrapper,
  inputItem,
  inputItemNumber,
  inputItemWrapper,
  nameInput,
  refFlag,
  startButton,
  unitListContainer,
} from './style'
import { userDataState } from '@/context/atoms'

// homeページ
export const Home: NextPage = () => {
  const [player, setPlayer] = useState<string>('unknown')
  const [unitList, setUnitList] = useState<string[]>([''])
  const setUserData = useSetRecoilState(userDataState)
  const router = useRouter()
  const a = useRef<HTMLDivElement>(null)

  function addUnit() {
    setUnitList((prev) => [...prev, ''])
    a.current?.scrollIntoView({ behavior: 'smooth' })
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
      <h1 css={gameTitle}>ゲームタイトル</h1>
      <div css={homeWrapper}>
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
              <div key={index} css={inputItemWrapper}>
                <p css={inputItemNumber}>{index + 1}</p>
                <input
                  css={inputItem}
                  onChange={(e) => editUnit(index, e.target.value)}
                  value={value}
                  placeholder='講義名を入力してください'
                />
              </div>
            )
          })}
          <div ref={a} css={refFlag}>
            a
          </div>
        </div>
        {unitList.length < 20 && (
          <button css={addFormButton} onClick={() => addUnit()}>
            受ける講義を追加する
          </button>
        )}
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
