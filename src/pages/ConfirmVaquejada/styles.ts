import styled from 'styled-components'

export const Confirm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin-top: 2.5rem;
  }

  @media (max-width: 700px) {
    h1 {
      margin-top: 1rem;
      text-align: center;
    }

    img {
      width: 10rem;
    }
  }
`
