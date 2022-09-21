import { css } from '@emotion/react'
import { colors } from '@/styles/template'

export const layoutContainer = css`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    ${colors.text.secondly},
    ${colors.base.primary},
    ${colors.base.dark}
  );
`
