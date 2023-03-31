import { Routes, Route } from 'react-router-dom'
import { FormPage } from './pages/Form'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Sheets } from './pages/Sheets'
import { Results } from './pages/Results'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Form" element={<FormPage />} />
        <Route path="/Sheets" element={<Sheets />} />
        <Route path="/Results" element={<Results />} />
      </Route>
    </Routes>
  )
}
