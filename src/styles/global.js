import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    font-family: 'Solway', serif;
    text-decoration: none;
  }

  html, body, #root{
    width: 100%;
    height: 100%;
  }
`;
 
export default GlobalStyle;