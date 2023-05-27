import { Routes, Route } from 'react-router-dom'
import { RegisterManager } from './pages/Register'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { DefaultLayout } from './layout/DefaultLayout'
import { Profile } from './pages/Profile'
import { UserLayout } from './layout/UserLayout'

export function Router() {
  /*
  const [isLoggedIn, setIsloggedIn] = useState(false)

  function handleLogin() {
    setIsloggedIn(true)
  }
  */

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterManager />} />
      </Route>
      <Route path="/user/" element={<UserLayout />}>
        <Route path="/user/profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}
