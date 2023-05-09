import { styled } from '../../styles'

export const StyledButton = styled('button', {
  display: 'flex',
  boxSizing: 'border-box',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '6px 14px',
  backgroundColor: '$yellow100',
  color: '$white',
  borderColor: '$FAFAFA',
  fontWeight: '700',
  fontSize: '14px',
  borderRadius: '4px',
  border: '2px solid',
  outline: 'none',
  gap: '10px',
  boxShadow:
    'rgba(17, 17, 26, 0.05) 0px 1px 0px,rgba(17, 17, 26, 0.1) 0px 0px 8px',
  '&:hover': {
    backgroundColor: '$white',
    color: '$yellow100',
    border: '2px solid',
    boxSizing: 'border-box',
    borderColor: '$yellow100',
    borderRadius: '4px',
  },
})
