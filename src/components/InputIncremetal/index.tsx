import { useState } from 'react'
import { Container, DecrementButton, IncrementButton, Input } from './styles'

interface InputIncrementalProps {
  onValueChange: (value: string) => void
}

export function InputIncremental({ onValueChange }: InputIncrementalProps) {
  const [value, setValue] = useState(0)

  const handleIncrement = () => {
    setValue(value + 1)
    onValueChange(String(value + 1))
  }

  const handleDecrement = () => {
    if (value > 0) {
      setValue(value - 1)
      onValueChange(String(value - 1))
    }
  }
  function handleSetValue(value: string) {
    setValue(Number(value))
    onValueChange(value)
  }

  return (
    <Container>
      <DecrementButton type="button" onClick={handleDecrement} />
      <Input
        type="number"
        value={value}
        onChange={(e) => handleSetValue(e.target.value)}
      />
      <IncrementButton type="button" onClick={handleIncrement} />
    </Container>
  )
}
