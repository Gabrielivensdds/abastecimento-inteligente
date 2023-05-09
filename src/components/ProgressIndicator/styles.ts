import * as Progress from '@radix-ui/react-progress'
import { styled } from '../../styles'

export const ProgressRoot = styled(Progress.Root, {
  position: 'relative',
  overflow: 'hidden',
  background: '$gray300',
  borderRadius: '99999px',
  width: 300,
  height: 15,
  transform: 'translateZ(0)',
})

export const StyledProgressIndicator = styled(Progress.Indicator, {
  backgroundColor: '$blue500',
  width: '100%',
  height: '100%',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
})
