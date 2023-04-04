import { useState } from 'react'
import Select, { MultiValue } from 'react-select'
import { colorStyles } from './styles'

interface Option {
  value: string
  label: string
}

interface MultiSelectProps {
  options: Option[]
  onChange?: (selectedOptions: MultiValue<Option>) => void
}

export function MultiSelect({ options, onChange }: MultiSelectProps) {
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<Option>>([])

  const handleSelectChange = (newValue: MultiValue<Option>) => {
    setSelectedOptions(newValue)
    if (onChange) {
      onChange(newValue)
    }
  }

  return (
    <Select
      options={options}
      isMulti
      placeholder="Selecione"
      styles={colorStyles}
      value={selectedOptions}
      onChange={handleSelectChange}
    />
  )
}
