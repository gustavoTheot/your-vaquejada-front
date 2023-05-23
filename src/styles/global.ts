import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${(props) => props.theme.withe};
    }

    body, input, button{
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
    } 

    h1{
        font-family: 'Inter';
    }

    p{
        color: ${(props) => props.theme['gray-title']}
    }    
    
    button{
        cursor: pointer;
    }
`
