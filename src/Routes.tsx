import { Routes, Route } from 'react-router-dom'
import { RegisterManager } from './pages/Register'
import { Login } from './pages/Login'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterManager />} />
      </Route>
    </Routes>
  )
}
