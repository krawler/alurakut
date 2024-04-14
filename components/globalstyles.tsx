import { createGlobalStyle } from "styled-components";
import { AlurakutStyles } from "@/lib/AluraCommons";

const GlobalStyle = createGlobalStyle`
 
 *{
  margin:0;
  padding: 0;
  box-sizing: border-box;
 }
 
 html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #D9E6F6;  
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  ${AlurakutStyles}

`;

export default GlobalStyle;
