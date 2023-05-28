import { Routes, Route } from 'react-router-dom'
import { RegisterManager } from './pages/Register'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { DefaultLayout } from './layout/DefaultLayout'
import { EditPassword } from './pages/EditPassword'
import { UserLayout } from './layout/UserLayout'
import { Profile } from './pages/Profile'

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
        <Route path="/user/editPassword" element={<EditPassword />} />
      </Route>
    </Routes>
  )
}
