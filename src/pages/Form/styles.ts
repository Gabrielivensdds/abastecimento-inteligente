import { styled } from '../../styles'

export const Container = styled('div', {
  width: '100%',
})

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

export const Label = styled('label', {
  color: '$gray500',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 14,
  paddingLeft: 15,
})

export const ErrorMessage = styled('div', {
  display: 'flex',
  alignItems: 'center',
  border: 'solid',
  borderColor: '$gray500',
  borderWidth: '1px',
  color: '$gray500',
  backgroundColor: '$yellow600',
})
