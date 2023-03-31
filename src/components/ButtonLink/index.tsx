import { ReactNode } from 'react'

import { StyledButton } from './styles'
import { CSS } from '@stitches/react'

interface ButtonLinkProps {
  children: ReactNode
  css?: CSS
}

export const ButtonLink = ({ children, css }: ButtonLinkProps) => (
  <StyledButton css={css}>{children}</StyledButton>
)
