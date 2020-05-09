import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    margin:0;
    padding:0;
}

html{
    font-size: 62.5%;
}

body{
    font-family: 'Lato', sans-serif;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.6rem;
    transition: background-color 0.6s ease-in-out, color 1s 1s;
}
`;

export default GlobalStyles;
