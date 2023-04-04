import { CheckboxIndicator, CheckboxRoot } from './styles'
import { CheckFat } from '@phosphor-icons/react'

interface LabelProps {
  id: string
  onValueChange: (value: boolean) => void
}
export const CheckBox = ({ id, onValueChange }: LabelProps) => {
  return (
    <CheckboxRoot id={id} onCheckedChange={onValueChange}>
      <CheckboxIndicator>
        <CheckFat size={12} weight="fill" />
      </CheckboxIndicator>
    </CheckboxRoot>
  )
}
