import { styled } from '../../styles'

export const Container = styled('div', {
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
})

export const LineFormConteiner = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  marginTop: '50px',
  gap: '4.325rem',
})

export const TitleFormConteiner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
})

export const GridConteiner = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  justifyContent: 'space-between',
  marginTop: '50px',
  gap: '4.325rem',
})
