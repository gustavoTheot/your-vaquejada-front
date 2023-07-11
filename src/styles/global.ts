import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body{
        background-color: ${(props) => props.theme.withe};
    }

    body, button{
        font-size: 1rem;
    } 
    
    span, input{
        font-size: 0.875rem;
    }

    p{
        color: ${(props) => props.theme['gray-title']}
    }    
    
    button{
        cursor: pointer;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;

      margin-top: 3.5rem;

      input {
        width: 25rem;
        height: 3rem;
        padding-left: 20px;
        outline: none;

        border: 1px solid ${(props) => props.theme['border-input']};
        border-radius: 8px;

        &::placeholder {
          color: ${(props) => props.theme['placeholder-input']};
        }
    }

    button {
      margin-top: 3.5rem;
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
