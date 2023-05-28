import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  margin-top: 2.5rem;
`

export const DataProfile = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  width: 20rem;
`

export const Field = styled.div``

export const FieldValue = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin-top: 1rem;
  }

  @media (max-width: 700px) {
    input {
      width: 20rem;
    }
  }
`
