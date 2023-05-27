import { Link, useNavigate } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { HeaderContainer, NavBar } from './styles'
import { ArrowLeft, SignOut } from 'phosphor-react'
import { useEffect, useState } from 'react'

export function UserHeader() {
  const [isDropDown, setIsDropDown] = useState(false)
  const history = useNavigate()

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

  function handleLogout() {
    console.log('tentando sair')
    localStorage.removeItem('token')
    history('/', { replace: true })
  }

  return (
    <HeaderContainer>
      {isDropDown ? (
        <NavBar>
          <Link to={''}>
            <ArrowLeft size={24} />
          </Link>

          <ul>
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
      ) : (
        <NavBar>
          <Link to={''}>
            <ArrowLeft size={24} />
          </Link>

          <Link to={'/user'}>
            <img src={logo} alt="" />
          </Link>

          <ul>
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
