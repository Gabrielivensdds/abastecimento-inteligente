import {
  Flex,
  Label,
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupRoot,
} from './styles'

interface Option {
  value: string
  label: string
}

interface RadioGroupProps {
  options: Option[]
  onChange: (selectedOptions: string) => void
}

export function RadioGroup({ options, onChange }: RadioGroupProps) {
  return (
    <RadioGroupRoot
      aria-label="View density"
      defaultValue={options[0].value}
      onValueChange={onChange}
    >
      {options.map((option) => (
        <Flex key={option.value}>
          <RadioGroupItem value={option.value} id={option.value}>
            <RadioGroupIndicator />
          </RadioGroupItem>
          <Label htmlFor={option.value}>{option.label}</Label>
        </Flex>
      ))}
    </RadioGroupRoot>
  )
}
