import styled from 'styled-components'

export const RegisterContainer = styled.div``

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 2.5rem;

  span {
    margin-top: 2rem;
    font-weight: 700;

    a {
      color: #40396e;
      text-decoration: none;
    }
  }

  @media (max-width: 700px) {
    h1 {
      margin: 0 1rem 0 1rem;
      text-align: center;
    }

    form {
      input {
        width: 20rem;
      }
    }
  }
`

export const ViewInput = styled.div`
  position: relative;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    position: absolute;

    bottom: 0.5rem;
    right: 1rem;

    border: none;
    background-color: transparent;
  }
`
