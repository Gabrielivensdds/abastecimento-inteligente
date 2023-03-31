import { ReactNode } from 'react'

interface TextProps {
  children: ReactNode
}

export const Text = ({ children }: TextProps) => {
  return <p>{children}</p>
}
