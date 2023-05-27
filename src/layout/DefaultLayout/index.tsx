import { Outlet } from 'react-router-dom'
import { DefaultHeader } from '../../components/DefaultHeader'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <DefaultHeader />
      <Outlet />
    </LayoutContainer>
  )
}
