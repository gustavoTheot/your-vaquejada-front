import styled from 'styled-components'

export const HomeContainer = styled.div``

export const MainHome = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    width: 40rem;
    text-align: center;
    margin-top: 10rem;
    margin-bottom: 3.75rem;
  }
`

export const ButtonsUserPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  button {
    width: 18rem;
    height: 3rem;
    background-color: ${(props) => props.theme['orange-dark']};

    border: none;
    border-radius: 8px;

    cursor: pointer;

    a {
      font-size: 0.875rem;
      text-decoration: none;
      color: ${(props) => props.theme.withe};
    }
  }
`
