import { Routes, Route } from 'react-router-dom'
import { RegisterManager } from './pages/Register'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { DefaultLayout } from './layout/DefaultLayout'
import { EditPassword } from './pages/EditPassword'
import { UserLayout } from './layout/UserLayout'
import { Profile } from './pages/Profile'
import { ConfirmCreateVaquejada } from './pages/ConfirmVaquejada'
import { CreateVaquejada } from './pages/CreateVaquejada'
import { GetVaquejada } from './pages/GetVaquejada'
import { CreateCowboy } from './pages/CreateCowboy'
import { GetCowboy } from './pages/GetCowboy'
import { TabelaVaqueiro } from './pages/Access'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterManager />} />
      </Route>
      <Route path="/user/" element={<UserLayout />}>
        <Route path="/user/access" element={<TabelaVaqueiro />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/editPassword" element={<EditPassword />} />
        <Route
          path="/user/confirmCreateVaquejada"
          element={<ConfirmCreateVaquejada />}
        />
        <Route path="/user/createVaquejada" element={<CreateVaquejada />} />
        <Route path="/user/listVaquejada" element={<GetVaquejada />} />
        <Route path="/user/createCowboy" element={<CreateCowboy />} />
        <Route path="/user/listCowboy/:id" element={<GetCowboy />} />
      </Route>
    </Routes>
  )
}
