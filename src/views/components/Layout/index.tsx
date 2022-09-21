import { ReactNode } from 'react'
import { layoutContainer } from './style'

interface Props {
  children: ReactNode
}
const Layout = ({ children }: Props) => {
  return <div css={layoutContainer}>{children}</div>
}
export default Layout
