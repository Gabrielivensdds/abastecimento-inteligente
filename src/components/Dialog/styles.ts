import { styled } from '../../styles'
import * as Modal from 'react-modal'

export const StyledModal = styled(Modal, {})

export const CustomStyled: Modal.Styles = {
  overlay: {
    backgroundColor: 'rgba(225, 225, 225, .75)',
  },
  content: {
    margin: 'auto',
    maxWidth: '500px',
    padding: '40px',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  },
}

export const CardWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$white',
  alignItems: 'center',
  borderRadius: '8px',
  padding: '14px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
  width: '29.25rem',
  boxSizing: 'border-box',
  height: 'fit-content',
  gap: '1rem',
})
