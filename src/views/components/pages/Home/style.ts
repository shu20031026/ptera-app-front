import { css } from '@emotion/react'
import { colors } from '@/styles/template'

export const homeContainer = css`
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${colors.text.secondly},
    ${colors.base.primary},
    ${colors.base.dark}
  );
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
  gap: 20px;
  height: 30vh;
  margin-bottom: 50px;
  overflow-y: scroll;
  padding-bottom: 50px;
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
  font-size: 35px;
  padding: 10px;
  transition: 0.3s;
  &:first-child {
    margin-top: 5px;
  }
  &:hover {
    background: ${colors.text.primary};
    transform: translateY(-5px);
  }
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.base.primary};
    opacity: 0.8;
    font-size: large;
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
  min-width: 45px;
  margin: 0;
  margin-left: 0 10px;
`

export const inputItem = css`
  width: 100%;
  min-height: 50px;
  font-size: 35px;
  font-weight: bold;
  margin-left: 10px;
  margin-right: 10px;
  transform: skewX(-15deg);
  border: thick double ${colors.base.primary};
  border-top: none;
  border-right: none;
  padding: 5px;
  background: rgba(255, 255, 255, 0.8);
  transition: 0.3s;
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
    transform: skewX(-15deg);
    height: 49px;
    border: thick double ${colors.base.primary};
    background: ${colors.text.primary};
    border-top: none;
    border-right: none;
  }
  border: none;
`

export const addFormButton = css`
  width: 70%;
  min-height: 50px;
  font-size: large;
  margin-bottom: 20px;
  border: none;
  cursor: pointer;
  border-radius: 25px;
  border: thick double ${colors.base.primary};
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`

export const startButton = css`
  width: 70%;
  height: 50px;
  font-size: large;
  border: none;
  cursor: pointer;
  border-radius: 25px;
  border: thick double ${colors.base.primary};
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`

export const refFlag = css`
  visibility: hidden;
  height: 0;
`
