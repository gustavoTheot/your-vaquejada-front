import { Link, useNavigate } from 'react-router-dom'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ArrowLeft, List, SignOut } from 'phosphor-react'
import { useEffect, useState } from 'react'
import {
  Content,
  HeaderContainer,
  HeaderDropDown,
  Item,
  NavBar,
  NavBarDropDown,
  Portal,
  Trigger,
} from './styles'

export function UserHeader() {
  const [isDropDown, setIsDropDown] = useState(false)
  const history = useNavigate()

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1190) {
        setIsDropDown(true)
      } else {
        setIsDropDown(false)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  function handleLogout() {
    localStorage.removeItem('token')
    history('/', { replace: true })
  }

  return (
    <HeaderContainer>
      {isDropDown ? (
        <NavBarDropDown>
          <button>
            <ArrowLeft size={24} />
          </button>

          <HeaderDropDown>
            <DropdownMenu.Root>
              <Trigger asChild>
                <button>
                  <List size={32} />
                </button>
              </Trigger>

              <Portal>
                <Content sideOffset={5}>
                  <Item>
                    <Link to={''}>Criar vaquejada</Link>
                  </Item>

                  <Item>Visualizar vaquejadas</Item>

                  <Item>Comprar pacote</Item>

                  <Item>
                    <Link to={'/user/profile'}>Perfil</Link>
                  </Item>

                  <Item>
                    <Link to={'/user/editPassword'}>Alterar senha</Link>
                  </Item>
                </Content>
              </Portal>
            </DropdownMenu.Root>
          </HeaderDropDown>

          <button onClick={handleLogout}>
            Sair
            <SignOut size={24} />
          </button>
        </NavBarDropDown>
      ) : (
        <NavBar>
          <Link to={''}>
            <ArrowLeft size={24} />
          </Link>

          <ul>
            <li>
              <Link to={''}>Criar vaquejada</Link>
            </li>
            <li>
              <Link to={''}>Visualizar vaquejadas</Link>
            </li>
            <li>
              <Link to={''}>Alterar senha</Link>
            </li>
            <li>
              <Link to={'/user/profile'}>Perfil</Link>
            </li>
            <li>
              <button onClick={handleLogout}>
                Sair
                <SignOut size={24} />
              </button>
            </li>
          </ul>
        </NavBar>
      )}
    </HeaderContainer>
  )
}
