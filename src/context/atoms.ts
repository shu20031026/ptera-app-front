import { atom } from 'recoil'

export type UserDataType = {
  userName: string
  unitList: string[]
}

export const userDataState = atom<UserDataType>({
  key: 'userDataState',
  default: {
    userName: '',
    unitList: [],
  },
})
