import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
 ${normalize};

 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    width:100%;
    height:100%;
    font-family: ${({ theme }) => theme.fonts.grotesk};
    font-size: 1.6rem;
    background: ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.dark};
    cursor: default;
    overflow-x:hidden;
  }

  h1,h2,h3,h4,h5,h6,button {
    font-family: ${({ theme }) => theme.fonts.grotesk};
  }

  a {
    text-decoration: none;
    &:hover,
    &:active {
      text-decoration: none;
    }
  }

  li{
    list-style: none;
  }
`;

export default GlobalStyles;
