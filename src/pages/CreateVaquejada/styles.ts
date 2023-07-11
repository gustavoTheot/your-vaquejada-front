import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form label:first-child {
    margin-right: 2rem;
  }

  @media (max-width: 700px) {
    form label:first-child {
      margin: 0 1rem 0 1rem;
    }
  }
`
