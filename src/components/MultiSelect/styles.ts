import { StylesConfig } from 'react-select'

interface ColourOption {
  readonly value: string
  readonly label: string
  readonly isFixed?: boolean
  readonly isDisabled?: boolean
}

export const colorStyles: StylesConfig<ColourOption, true> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    borderRadius: '4px',
    height: '2.875rem',
    width: '100%',
  }),
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: '#EF4444',
    }
  },
  multiValueRemove: (styles) => ({
    ...styles,
    color: 'white',
    ':hover': {
      backgroundColor: '#EF4444',
      color: 'black',
    },
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: 'white',
    fontFamily: 'Inter',
  }),
}
