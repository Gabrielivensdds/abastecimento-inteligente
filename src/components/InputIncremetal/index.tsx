import { useState } from 'react'
import { Container, DecrementButton, IncrementButton, Input } from './styles'

export function InputIncremental() {
  const [value, setValue] = useState(0)

  const handleIncrement = () => {
    setValue(value + 1)
  }

  const handleDecrement = () => {
    if (value > 0) {
      setValue(value - 1)
    }
  }

  return (
    <Container>
      <DecrementButton onClick={handleDecrement} />
      <Input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IncrementButton onClick={handleIncrement} />
    </Container>
  )
}
