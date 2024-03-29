import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  @media (max-width: 1190px) {
    margin: 0 3rem 0 3rem;
  }

  @media (max-width: 700px) {
    margin: 0 3rem 0 3rem;
  }
`

export const HeaderDropDown = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Trigger = styled(DropdownMenu.Trigger)`
  border: none;
  background-color: transparent;
  button {
    border: none;
    background-color: transparent;
  }
`

export const Portal = styled(DropdownMenu.Portal)``

export const Content = styled(DropdownMenu.Content)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 15rem;
  border-radius: 8px;

  background-color: ${(props) => props.theme['orange-dark']};
`

export const Item = styled(DropdownMenu.Item)`
  cursor: pointer;
  padding: 1rem;
  text-align: center;
  width: 100%;
  color: ${(props) => props.theme.withe};

  a {
    text-decoration: none;
    color: ${(props) => props.theme.withe};
  }
`

export const NavBarDropDown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 2.5rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme['gray-title']};
  }

  button {
    border: none;
    background-color: transparent;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 2.5rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme['gray-title']};
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    li {
      list-style: none;

      button {
        border: none;
        background-color: transparent;

        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }
`
