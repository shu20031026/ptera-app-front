import { css } from '@emotion/react'
import { colors } from '@/styles/template'

export const homeContainer = css`
  text-align: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: linear-gradient(to bottom, ${colors.base.primary} 50%, ${colors.base.dark} 100%);
`

export const gameTitle = css`
  color: ${colors.text.primary};
`

export const homeWrapper = css`
  width: 40%;
  min-width: 300px;
`

export const unitListContainer = css`
  display: flex;
  flex-direction: column;
  height: 30vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const nameInput = css`
  width: 100%;
  min-height: 50px;
  font-size: large;
  background: rgba(255, 255, 255, 0.5);
  margin-bottom: 50px;
  &:first-child {
    margin-top: 5px;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.8);
    transform: translateY(-5px);
  }
  border: none;
`

export const inputItem = css`
  min-height: 50px;
  font-size: large;
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.5);
  margin-left: 10px;
  margin-right: 10px;
  &:first-child {
    margin-top: 5px;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.8);
    transform: translateY(-5px);
  }
  border: none;
`

export const addFormButton = css`
  width: 100%;
  min-height: 50px;
  font-size: large;
  margin-bottom: 30px;
`

export const startButton = css`
  width: 100%;
  height: 50px;
  font-size: large;
`
