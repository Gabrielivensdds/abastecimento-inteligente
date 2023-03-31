import { styled } from '../../styles'

export const StyledButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '6px 14px',
  backgroundColor: '$white',
  color: '$gray500',
  fontWeight: '700',
  fontSize: '14px',
  borderRadius: '4px',
  border: 'none',
  outline: 'none',
  gap: '10px',
  boxShadow: '0px 0px 5px #888888 ',
  '&:hover': {
    backgroundColor: '$gray100',
  },
})
