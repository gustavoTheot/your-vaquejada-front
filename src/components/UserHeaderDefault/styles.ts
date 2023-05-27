import styled from 'styled-components'

export const HeaderContainer = styled.header`
  @media (max-width: 700px) {
    margin: 0 3rem 0 3rem;
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
