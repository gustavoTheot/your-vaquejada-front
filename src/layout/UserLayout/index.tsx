import { Outlet } from 'react-router-dom'
import { UserHeader } from '../../components/UserHeaderDefault'
import { LayoutContainer } from './styles'

export function UserLayout() {
  return (
    <LayoutContainer>
      <UserHeader />
      <Outlet />
    </LayoutContainer>
  )
}
