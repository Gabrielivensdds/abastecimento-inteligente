import { ReactNode } from 'react'

import { StyledButton } from './styles'

interface ButtonProps {
  children: ReactNode
}

export const Button = ({ children }: ButtonProps) => (
  <StyledButton>{children}</StyledButton>
)
