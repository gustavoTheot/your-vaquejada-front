import styled from 'styled-components'

export const Main = styled.main`
  h1 {
    margin-top: 5rem;
    text-align: center;
    margin-bottom: 100px;
  }
`
export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1159px;
  max-height: 475px;
  overflow-y: scroll;
  padding: 12px;

  @media (max-width: 767px) {
    justify-content: flex-start;
  }
`

export const Table = styled.table`
  border-spacing: 0;
  border-collapse: collapse;
  text-align: center;
  min-width: 720px;
  width: 94%;
  max-height: 100%;
  overflow-x: auto;

  th {
    padding: 12px;
    background-color: ${(props) => props.theme['border-input']};
    font-weight: bold;
  }

  th:first-child {
    border-radius: 8px 0 0 0;
  }

  th:last-child {
    border-radius: 0 8px 0 0;
  }

  td {
    padding: 12px;
    background-color: #f6f6f6;
  }

  td:first-child {
    border-radius: 0 0 0 8px;
  }

  td:last-child {
    border-radius: 0 0 8px 0;
  }

  button {
    background-color: transparent;
    border: none;
  }
`
