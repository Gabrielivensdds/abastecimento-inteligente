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
  paddingLeft: '100px',
})

export const ItemFormConteiner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  width: '100%',
})

export const AlignCenterFormConteiner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '14px',
  width: '100%',
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
  justifyContent: 'center',
  borderRadius: '5px',
  border: '2px solid $red500',
  color: '$gray900',
  backgroundColor: '$gray100',
  fontWeight: 'bold',
  fontSize: '1rem',
  padding: '0.75rem 1.25rem',
  boxShadow: '5px 5px 10px rgba(0,0,0,0.3)',
})
