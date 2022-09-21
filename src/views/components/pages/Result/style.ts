import { css } from '@emotion/react'
import { colors } from '@/styles/template'

export const result = css`
  color: ${colors.base.primary};
  width: 100%;
  height: 100%;
`

export const header = css`
  top: 60px;
  text-align: center;
  font-size: 55px;
  position: relative;
  width: 600px; /* 直径 */
  height: 300px; /* 直径 */
  margin: auto;
  transform: rotate(0deg);
`

export const headerSpan = css`
  top: 0;
  left: calc(50% - 30px); /* 中心点、、文字サイズ分ずらす */
  display: inline-block;
  width: 60px; /* 文字サイズより小さくしない */
  height: 300px; /* 半径 */
  transform-origin: center bottom; /* 回転の基準点 */
`
export const span1 = css`
  position: absolute;
  top: 0;
  left: calc(50% - 30px); /* 中心点、、文字サイズ分ずらす */
  display: inline-block;
  width: 60px; /* 文字サイズより小さくしない */
  height: 300px; /* 半径 */
  transform-origin: center bottom; /* 回転の基準点 */
  transform: rotate(-60deg);
`

export const span2 = css`
  top: 0;
  left: calc(50% - 30px); /* 中心点、、文字サイズ分ずらす */
  display: inline-block;
  width: 60px; /* 文字サイズより小さくしない */
  height: 300px; /* 半径 */
  transform-origin: center bottom; /* 回転の基準点 */
  transform: rotate(-40deg);
`

export const span3 = css`
  transform: rotate(-20deg);
  position: absolute;
  top: 0;
  left: calc(50% - 30px); /* 中心点、、文字サイズ分ずらす */
  display: inline-block;
  width: 60px; /* 文字サイズより小さくしない */
  height: 300px; /* 半径 */
  transform-origin: center bottom; /* 回転の基準点 */
`

export const span4 = css`
  transform: rotate(0deg);
  position: absolute;
  top: 0;
  left: calc(50% - 30px); /* 中心点、、文字サイズ分ずらす */
  display: inline-block;
  width: 60px; /* 文字サイズより小さくしない */
  height: 300px; /* 半径 */
  transform-origin: center bottom; /* 回転の基準点 */
`

export const span5 = css`
  transform: rotate(20deg);
  position: absolute;
  top: 0;
  left: calc(50% - 30px); /* 中心点、、文字サイズ分ずらす */
  display: inline-block;
  width: 60px; /* 文字サイズより小さくしない */
  height: 300px; /* 半径 */
  transform-origin: center bottom; /* 回転の基準点 */
`

export const span6 = css`
  transform: rotate(40deg);
  position: absolute;
  top: 0;
  left: calc(50% - 30px); /* 中心点、、文字サイズ分ずらす */
  display: inline-block;
  width: 60px; /* 文字サイズより小さくしない */
  height: 300px; /* 半径 */
  transform-origin: center bottom; /* 回転の基準点 */
`

export const span7 = css`
  transform: rotate(60deg);
  position: absolute;
  top: 0;
  left: calc(50% - 30px); /* 中心点、、文字サイズ分ずらす */
  display: inline-block;
  width: 60px; /* 文字サイズより小さくしない */
  height: 300px; /* 半径 */
  transform-origin: center bottom; /* 回転の基準点 */
`

export const user = css`
  text-align: center;
  font-size: 200%;
  background-color: #ec6832;
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
`

export const userInf = css`
  text-align: center;
  font-size: 200%;
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const dropUnit = css`
  margin-top: 10px;
  color: #fff;
  text-align: center;
  font-size: 200%;
  font-weight: bold;
  background-color: #ec6832;
`

export const dropSubUnit = css`
  font-family: sans-serif;
  text-align: center;
  font-size: 200%;
  width: 40%;
  color: #fff;
  display: inline-block;
  margin-left: 80px;
`

export const dropUnitNum = css`
  margin-top: 32px;
  color: white;
  text-align: center;
  font-size: 200%;
`

export const userScore = css`
  text-align: center;
  font-size: 400%;
  color: #7fffd4;
  margin-top: 32px;
  margin-bottom: 32px;
`

export const rankButton = css`
  background-color: yellow;
  width: 300px;
  height: 100px;
  left: 0%;
  right: 0;
  top: 0%;
  bottom: 0;
`

export const rankPost = css`
  text-decoration: underline;
  text-align: center;
  font-size: 200%;
`
