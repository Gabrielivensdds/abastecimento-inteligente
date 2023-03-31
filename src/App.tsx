import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { globalStyles } from './styles/global'

globalStyles()

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
