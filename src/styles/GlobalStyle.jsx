import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
    font-family: 'sans-serif';
    display: flex;
    justify-content: center;     // ✅ 앱을 수평 중앙으로
    align-items: flex-start;
    min-height: 100vh;
  }
  font-family: 'Inter', sans-serif;

  button {
    all: unset; 
    font-family: inherit;
    }
    `;

export default GlobalStyle;
