import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');
*, *::before, *::after {
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
}

body{
    font-family: 'Lato', sans-serif;
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.fontColor};
    font-size: 1.6rem;
    transition: background-color 1s, color 1s 1s;
}
`;

export default GlobalStyles;