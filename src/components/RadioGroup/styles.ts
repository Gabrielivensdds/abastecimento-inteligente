import { styled } from '../../styles'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const RadioGroupRoot = styled(RadioGroup.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const RadioGroupItem = styled(RadioGroup.Item, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  all: 'unset',
  backgroundColor: '$yellow600',
  width: 20,
  height: 20,
  borderRadius: '100%',
  boxShadow: `0 0 0 2px #989797`,
  '&:focus': {
    boxShadow: `0 0 0 2px yellow600`,
  },
})

export const RadioGroupIndicator = styled(RadioGroup.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: '$white',
  },
})

export const Flex = styled('div', { display: 'flex' })

export const Label = styled('label', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#555555',
  fontSize: 14,
  lineHeight: 1,
  paddingLeft: 15,
})
