import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.background};
    color: ${({ theme }) => theme.text};
    font-family: Arial, sans-serif;
  }
`;
