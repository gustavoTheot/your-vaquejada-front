import styled from 'styled-components'

export const Main = styled.main`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    label:first-child {
      width: 25rem;
    }

    input[type='radio'] {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 700px) {
    form label:first-child {
      width: 20rem;
    }
  }
`

export const Radio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  margin-right: 16rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }

  @media (max-width: 700px) {
    margin-right: 10rem;
  }
`
