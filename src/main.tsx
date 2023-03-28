import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { MultiSelect } from './components/MultiSelect'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
      <App />
      <MultiSelect />
    </div>
  </React.StrictMode>,
)
