import { ReactNode } from 'react'

import { StyledButton } from './styles'
import { CSS } from '@stitches/react'

interface ButtonProps {
  children: ReactNode
  css: CSS
}

export const Button = ({ children, css }: ButtonProps) => (
  <StyledButton css={css}>{children}</StyledButton>
)
