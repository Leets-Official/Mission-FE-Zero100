import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
    font-family: 'sans-serif';
  }


    button {
    all: unset; 
    font-family: inherit;
    }
    `;

export default GlobalStyle;
