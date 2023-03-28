import { styled } from '@stitches/react'

export const Input = styled('input', {
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '10px 15px',
  fontSize: '16px',

  '&:focus': {
    outline: 'none',
    borderColor: '#0077FF',
    boxShadow: '0px 0px 3px #0077FF',
  },
})

export const Label = styled('label', {
  fontWeight: 'bold',
  marginBottom: '5px',
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
})
