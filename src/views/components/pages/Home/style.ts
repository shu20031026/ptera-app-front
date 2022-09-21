import { css } from '@emotion/react'
import { colors } from '@/styles/template'

export const homeContainer = css`
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(to bottom, ${colors.base.primary} 50%, ${colors.base.dark} 100%);
`

export const gameTitle = css`
  color: ${colors.text.primary};
  font-size: 70px;
`

export const homeWrapper = css`
  width: 40%;
  min-width: 300px;
  margin: 0 auto;
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

export const inputItemWrapper = css`
  display: flex;
  width: 100%;
`
export const inputItemNumber = css`
  color: ${colors.text.primary};
  font-size: 40px;
  font-weight: 500;
  margin: 0;
  margin-left: 0 10px;
`

export const inputItem = css`
  width: 100%;
  min-height: 50px;
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
  transform: skewX(-15deg);
  border: thick double ${colors.base.primary};
  border-top: none;
  border-right: none;
  padding: 5px;
  background: rgba(255, 255, 255, 0.8);
  &::placeholder {
    color: ${colors.base.primary};
    opacity: 0.8;
    font-size: large;
  }
  &:focus {
    outline: none;
  }
  &:first-child {
    margin-top: 10px;
  }
  &:placeholder-shown {
    transform: none;
    border: none;
  }
  &:hover {
    transform: translateY(-5px);
    transform: skewX(-15deg);
    border: thick double ${colors.base.primary};
    border-top: none;
    border-right: none;
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
