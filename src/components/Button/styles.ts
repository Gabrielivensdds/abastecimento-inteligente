import { styled } from '../../styles'

export const StyledButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '6px 14px',
  backgroundColor: '$yellow',
  color: '$white',
  fontWeight: '700',
  fontSize: '14px',
  borderRadius: '4px',
  border: 'none',
  outline: 'none',
  gap: '10px',
  boxShadow:
    'rgba(17, 17, 26, 0.05) 0px 1px 0px,rgba(17, 17, 26, 0.1) 0px 0px 8px',
  '&:hover': {
    backgroundColor: '$lightyellow',
  },
})
