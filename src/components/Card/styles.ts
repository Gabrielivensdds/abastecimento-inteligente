import { styled } from '../../styles'

export const CardWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '8px',
  padding: '0px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
  width: '240px',
  height: '350px',
  maxHeight: '242px',
  maxWidth: '170px',
  boxSizing: 'border-box',
})

export const Picture = styled('img', {
  width: '170px',
  height: '170px',
  justifyContent: 'start',
  alignItems: 'self-start',
})

export const Name = styled('h2', {
  fontSize: '16px',
  fontWeight: 500,
  margin: '16px 0 0 0',
})

export const Job = styled('h3', {
  fontSize: '14px',
  fontWeight: 400,
  margin: '8px 0 0 0',
})
