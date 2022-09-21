import { css } from '@emotion/react'
import { colors } from '@/styles/template'

export const ranking = css`
  color: ${colors.base.primary};
  height: 100%;
`

export const rankingItem = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 312.5px;
  height: 500px;
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
`

export const nameItem = css`
  text-align: center;
  font-size: 200%;
  margin: 0;
  margin-bottom: -50px;
  color: #da8e00;
  background: -webkit-linear-gradient(
    -45deg,
    #f7de05,
    #da8e00,
    #edac06,
    #f7de05,
    #ecb802,
    #daaf08,
    #b67b03,
    #da8e00,
    #edac06,
    #f7de05,
    #ecb802,
    #edac06
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: brightness(150%);
`
export const dropItem = css`
  text-align: center;
  font-size: 200%;
  margin: 0;
  padding-bottom: 50px;
  filter: brightness(125%);
`
export const dropSubItem = css`
  text-align: center;
  font-size: 100%;
  margin: 0;
  margin-top: -25px;
  filter: brightness(125%);
  color: white;
  background-color: black;
`

export const jobItem = css`
  text-align: center;
  font-size: 500%;
  margin: 0;
  margin-top: 70px;
  color: #ff8c00;
  background: -webkit-linear-gradient(0deg, #40e0d0, #ff8c00, #ff0080);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: brightness(150%);
`

export const pictureSize = css`
  width: 312.5px;
  height: 500px;
  filter: brightness(90%);
`

export const wrapper = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
`

export const rankPic = css`
  left: 0;
  margin-top: 105px;
  margin-left: 25px;
  filter: blur(5px);
  width: 280px;
  height: 225px;
  position: absolute;
`

export const rankStatus = css`
  left: 0;
  margin-top: 70px;
  margin-left: 25px;
  width: 100px;
  height: 100px;
  position: absolute;
  z-index: 10;
`

export const style = css`
  display: flex;
  flex-wrap: wrap;
`

export const headerContainer = css`
  width: 100%;
  background-color: black;
`

export const head = css`
  width: 100%;
  text-align: center;
  font-size: 500%;
  margin: 0;
`

export const headSub = css`
  text-align: center;
  font-size: 200%;
  margin-top: 0;
  margin-bottom: 20px;
  color: white;
`

export const rank = css`
  text-align: center;
  font-size: 250%;
  color: #00ffff;
  margin-bottom: 10px;
`
