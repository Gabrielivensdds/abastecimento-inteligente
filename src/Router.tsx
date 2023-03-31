import { Routes, Route } from 'react-router-dom'
import { FormPage } from './pages/Form'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Form" element={<FormPage />} />
      </Route>
    </Routes>
  )
}
