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
    color: white;
  }
  div#root{
    width: 100%;
    height: 100%;
  }
  button{
    width:fit-content;
    height: fit-content;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: white;
    background-color: #007bff;
  }
`
export default GlobalStyles
