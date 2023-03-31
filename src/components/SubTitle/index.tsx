import { CSS } from '@stitches/react'
import { ReactNode } from 'react'
import { StyledSubTitle } from './styles'

interface SubTitleProps {
  children: ReactNode
  css?: CSS
}

export const SubTitle = ({ children, css }: SubTitleProps) => {
  return <StyledSubTitle css={css}>{children}</StyledSubTitle>
}
