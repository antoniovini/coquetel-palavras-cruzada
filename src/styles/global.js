import { createGlobalStyle } from 'styled-components';

import background from "../assets/background.png";

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
    background-image: url(${background});
    background-position: center;
    background-size: cover;
  }
`;
 
export default GlobalStyle;