import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none; 
    outline: none;
  }
  body{
    width: 100dvw;
    height: 100dvh;
    overflow: hidden;
    background-color: #2F2F2F;
  }
`
export default GlobalStyles
