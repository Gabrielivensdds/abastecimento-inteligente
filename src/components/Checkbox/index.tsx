import { CheckboxIndicator, CheckboxRoot, Flex, Label } from './styles'
import { ReactNode } from 'react'
import { CheckFat } from '@phosphor-icons/react'

interface LabelProps {
  children: ReactNode
}
export const CheckBox = ({ children }: LabelProps) => {
  return (
    <Flex>
      <CheckboxRoot defaultChecked id="c1">
        <CheckboxIndicator>
          <CheckFat size={12} weight="fill" />
        </CheckboxIndicator>
      </CheckboxRoot>
      <Label htmlFor="c1">{children}</Label>
    </Flex>
  )
}
