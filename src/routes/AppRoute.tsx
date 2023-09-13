import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages'

export const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='*' element={<h2>404 not Found</h2>} />
    </Routes>
  )
}
