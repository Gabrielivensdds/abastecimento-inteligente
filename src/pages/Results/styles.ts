import { styled } from '../../styles'

export const StyledForm = styled('form', {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '1190px',
  margin: '0 auto',
})

export const ItemFormConteiner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
})

export const LineFormConteiner = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  marginTop: '50px',
})

export const TitleFormConteiner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
})
