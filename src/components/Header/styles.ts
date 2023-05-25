import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 2.5rem;
`

export const ListHome = styled.div`
  ul {
    display: flex;
    flex-direction: row;

    li {
      list-style: none;
      padding: 1rem;

      font-size: 0.875rem;

      cursor: pointer;

      a {
        text-decoration: none;
        color: ${(props) => props.theme['gray-title']};
      }
    }
  }
`
