import { styled } from '../../styles'

export const Input = styled('input', {
  height: '2.875rem',
  textAlign: 'center',
  margin: '0',
  paddingLeft: '25px',
  paddingRight: '25px',
  backgroundColor: 'white',
  border: '1px solid $gray100',
  boxShadow: `0 0 0 0.5px #989797`,
  '&:focus': {
    outline: 'none',
    borderColor: '$lightblue',
  },
  '&::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
})

export const DecrementButton = styled('button', {
  display: 'block',
  position: 'relative',
  width: '40px',
  height: '2.875rem',
  padding: 0,
  margin: 0,
  backgroundColor: '$white',
  border: '1px solid $gray100',
  borderTopLeftRadius: '2px',
  borderBottomLeftRadius: '2px',
  boxShadow: `0 0 0 0.5px #989797`,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$gray200',
  },
  '&::before': {
    content: "'-'",
    fontSize: '16px',
    fontWeight: 'bold',
    color: '$gray300',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
})

export const IncrementButton = styled('button', {
  display: 'block',
  position: 'relative',
  width: '40px',
  height: '2.875rem',
  padding: 0,
  margin: 0,
  backgroundColor: '$white',
  border: '1px solid $gray100',
  borderTopRightRadius: '2px',
  borderBottomRightRadius: '2px',
  boxShadow: `0 0 0 0.5px #989797`,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$gray200',
  },
  '&::before': {
    content: "'+'",
    fontSize: '16px',
    fontWeight: 'bold',
    color: '$gray300',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
})

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
})
