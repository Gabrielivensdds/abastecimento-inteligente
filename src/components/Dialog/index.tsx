import { ReactNode } from 'react'
import { CardWrapper, CustomStyled, StyledModal } from './styles'

interface DialogProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export function Dialog({ isOpen, onClose, children }: DialogProps) {
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onClose}
      closeTimeoutMS={200}
      ariaHideApp={false}
      style={CustomStyled}
    >
      <CardWrapper>{children}</CardWrapper>
    </StyledModal>
  )
}
