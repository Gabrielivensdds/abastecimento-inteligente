import { useState } from 'react'
import Select from 'react-select'
import { colorStyles } from './styles'

interface Option {
  value: string
  label: string
}

interface MultiSelectProps {
  options: Option[]
  onChange?: (selectedOptions: Option[]) => void
}

export function MultiSelect({ options, onChange }: MultiSelectProps) {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([])

  const handleSelectChange = (selectedOptions: Option[]) => {
    setSelectedOptions(selectedOptions)
    if (onChange) {
      onChange(selectedOptions)
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
