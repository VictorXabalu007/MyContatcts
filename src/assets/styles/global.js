import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Sora', sans-serif;
    }

    body {
        background: ${(props) => props.theme.colors.background};
        font-size: 16px;
    }

    button {
        cursor: pointer;
    }


`;
