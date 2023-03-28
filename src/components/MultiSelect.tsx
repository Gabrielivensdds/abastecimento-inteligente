import React from 'react'
import Select from 'react-select'
import { styled } from '../styles'

interface Option {
  value: string
  label: string
}

const options: Option[] = [
  { value: '1054', label: '1054' },
  { value: '1896', label: '1896' },
  { value: '0159', label: '0159' },
  { value: '9876', label: '9876' },
  { value: '5347', label: '5347' },
]

const StyledSelect = styled(Select, {
  borderRadius: '4px',
  backgroundColor: '$white',
  padding: '8px',
  fontSize: '16px',
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px #4c9aff',
  },
})

export function MultiSelect() {
  return <StyledSelect options={options} isMulti placeholder="Selecione" />
}
