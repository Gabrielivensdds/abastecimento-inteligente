import { styled } from './styles'

const Button = styled('button', {
  backgroundColor: '$yellow',
  borderRadius: 8,
  borderColor: '$white',
})

export function App() {
  return (
    <div className="App">
      <Button>TSET</Button>
    </div>
  )
}
