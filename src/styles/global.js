import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    font-family: 'Solway', serif;
    text-decoration: none;
    box-sizing: border-box;
  }

  html, body, #root{
    width: 100%;
    height: 100%;
    background-image: url("/assets/background.png");
    background-position: center;
    background-size: cover;
  }
`;
 
export default GlobalStyle;