import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        font-weight: light;

        
    }

    h1,h2,h3,h4,h5 {
        font-family: 'Teko', sans-serif;
        letter-spacing: 3px;

        &::selection {
            color: black;
            background-color: ${({ theme }) => theme.colors.yellow2};
        }   
    }

    p, a, button, span {
        /* font-size: 18px; */

        &::selection {
            color: black;
            background-color: ${({ theme }) => theme.colors.yellow2};
        }
    }


    h1 {
        font-size: 66px;

    }

`;
