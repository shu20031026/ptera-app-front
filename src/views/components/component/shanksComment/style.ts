import { css } from '@emotion/react'
import { colors } from '@/styles/template'

export const shanksContainer = css`
  position: absolute;
  z-index: 9999;
  height: 100%;
`

export const shanksBox = css`
  position: relative;
  padding-left: 90px;
  padding-right: 100px;
  margin-top: 500px;
  margin-left: -50px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.3);
  transform: skewX(30deg);
  border-right: 20px double rgba(255, 255, 255, 0.3);
  /* border-bottom: 20px double rgba(255, 255, 255, 0.3); */
  /* background: linear-gradient(225deg, transparent 100px, rgba(255, 255, 255, 0.3) 100px);
  background-position: top right; */
  /* background: rgba(255, 255, 255, 0.3), linear-gradient(45deg, transparent 20px, #c00 20px); */
`
export const shanksTalk = css`
  margin: 0;
  color: ${colors.text.primary};
  font-size: 30px;
  transform: skewX(-45deg);
`
