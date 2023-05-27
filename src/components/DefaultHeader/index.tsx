import { Link } from 'react-router-dom'
import {
  Content,
  Header,
  HeaderContainer,
  HeaderDropDown,
  Item,
  NavBar,
  Portal,
  Trigger,
} from './styles'

import logo from '../../assets/logo.svg'
import { useEffect, useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { List } from 'phosphor-react'

export function DefaultHeader() {
  const [isDropDown, setIsDropDown] = useState(false)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 700) {
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

  return (
    <HeaderContainer>
      {isDropDown ? (
        <HeaderDropDown>
          <div>
            <Link to={'/'}>
              <img src={logo} alt="" />
            </Link>
          </div>

          <DropdownMenu.Root>
            <Trigger asChild>
              <button>
                <List size={32} />
              </button>
            </Trigger>

            <Portal>
              <Content sideOffset={5}>
                <Item>
                  <Link to={'/'}>Início</Link>
                </Item>

                <Item>Sobre</Item>

                <Item>Contato</Item>

                <Item>
                  <Link to={'/login'}>Entrar</Link>
                </Item>
                <Item>
                  <Link to={'/register'}>Cadastre-se</Link>
                </Item>
              </Content>
            </Portal>
          </DropdownMenu.Root>
        </HeaderDropDown>
      ) : (
        <Header>
          <div>
            <Link to={'/'}>
              <img src={logo} alt="" />
            </Link>
          </div>

          <NavBar>
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
                <Link to={'/register'}>Cadastre-se</Link>
              </li>
            </ul>
          </NavBar>
        </Header>
      )}
    </HeaderContainer>
  )
}
