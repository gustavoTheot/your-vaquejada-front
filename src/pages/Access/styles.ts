import styled from 'styled-components'

export const Main = styled.main`
  h1 {
    margin-top: 5rem;
    text-align: center;
    margin-bottom: 100px;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & > a:first-child {
    margin-right: 40px;
  }

  button {
    padding: 10px 20px;
    background-color: #d47f56;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    font-weight: 700;
    font-size: 16px;
    padding: 6rem 3rem;

    &:hover {
      background-color: #c2613e;
    }
  }
`
