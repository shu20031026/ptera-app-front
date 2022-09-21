import { css } from '@emotion/react'
import { colors } from '@/styles/template'

export const layoutContainer = css`
  width: 100vh;
  height: 100%;
  background: linear-gradient(
    135deg,
    ${colors.text.secondly},
    ${colors.base.primary},
    ${colors.base.dark}
  );
`
