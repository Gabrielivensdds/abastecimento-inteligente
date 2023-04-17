import {
  Flex,
  Label,
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupRoot,
} from './styles'

interface Option {
  value: boolean
  label: string
}

interface RadioGroupProps {
  options: Option[]
  onChange: (selectedOptions: boolean) => void
}

export function RadioGroup({ options, onChange }: RadioGroupProps) {
  const handleValueChange = (value: string | boolean) => {
    if (typeof value === 'string') {
      onChange(value === 'true')
    } else {
      onChange(value)
    }
  }
  return (
    <RadioGroupRoot
      aria-label="View density"
      defaultValue={options[0].value.toString()}
      onValueChange={handleValueChange}
    >
      {options.map((option) => (
        <Flex key={option.label}>
          <RadioGroupItem value={option.value.toString()} id={option.label}>
            <RadioGroupIndicator />
          </RadioGroupItem>
          <Label htmlFor={option.label}>{option.label}</Label>
        </Flex>
      ))}
    </RadioGroupRoot>
  )
}
