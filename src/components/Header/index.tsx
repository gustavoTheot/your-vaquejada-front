import { Link } from 'react-router-dom'
import { HeaderContainer, ListHome } from './styles'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <Link to={'/'}>
          <img src={logo} alt="" />
        </Link>
      </div>

      <ListHome>
        <ul>
          <li>
            <Link to={'/'}>Inicio</Link>
          </li>
          <li>Sobre</li>
          <li>Contato</li>
          <li>
            <Link to={'/login'}>Entrar</Link>
          </li>
          <li>
            <Link to={'/register'}>Cadaste-se</Link>
          </li>
        </ul>
      </ListHome>
    </HeaderContainer>
  )
}
