import { atom } from 'recoil'

export type UserDataType = {
  userName: string
  unitList: string[]
}

export type ResultType = {
  userName: string
  breakUnit: string[]
  time: number
}

export const userDataState = atom<UserDataType>({
  key: 'userDataState',
  default: {
    userName: 'unknown',
    unitList: [],
  },
})

export const resultDataState = atom<ResultType>({
  key: 'resultDataState',
  default: {
    userName: 'unKnown',
    breakUnit: [],
    time: 0,
  },
})
