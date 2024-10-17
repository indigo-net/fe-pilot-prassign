import { createGlobalStyle } from 'styled-components'
import SCDream1 from '../../assets/font/sc-dream1.otf'
import SCDream2 from '../../assets/font/sc-dream2.otf'
import SCDream3 from '../../assets/font/sc-dream3.otf'
import SCDream4 from '../../assets/font/sc-dream4.otf'
import SCDream5 from '../../assets/font/sc-dream5.otf'
import SCDream6 from '../../assets/font/sc-dream6.otf'
import SCDream7 from '../../assets/font/sc-dream7.otf'
import SCDream8 from '../../assets/font/sc-dream8.otf'
import SCDream9 from '../../assets/font/sc-dream9.otf'
import { BREAK_POINT } from '../../styles/break-point'
import { FONT_SIZE } from '../../styles/font-size'
declare module '*.otf'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'SCDream';
    src: url(${SCDream1}) format('opentype');
    font-weight: 100;
    font-display: swap;
  }
  @font-face {
    font-family: 'SCDream';
    src: url(${SCDream2}) format('opentype');
    font-weight: 200;
    font-display: swap;
  }
  @font-face {
    font-family: 'SCDream';
    src: url(${SCDream3}) format('opentype');
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: 'SCDream';
    src: url(${SCDream4}) format('opentype');
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'SCDream';
    src: url(${SCDream5}) format('opentype');
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: 'SCDream';
    src: url(${SCDream6}) format('opentype');
    font-weight: 600;
    font-display: swap;
  }
  @font-face {
    font-family: 'SCDream';
    src: url(${SCDream7}) format('opentype');
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'SCDream';
    src: url(${SCDream8}) format('opentype');
    font-weight: 800;
    font-display: swap;
  }
  @font-face {
    font-family: 'SCDream';
    src: url(${SCDream9}) format('opentype');
    font-weight: 900;
    font-display: swap;
  }

    /* 스크롤바 전체 스타일 */
    ::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }

  /* 스크롤바 트랙 스타일 */
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* 스크롤바 핸들 스타일 */
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
  }

  /* 스크롤바 핸들 호버 시 스타일 */
  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  html{
    font-family: 'SCDream', sans-serif;
    font-size: 62.5%; 
    @media screen and (max-width: ${BREAK_POINT.mobile}) {
      font-size: 58%;
    }
    @media screen and (min-width: ${BREAK_POINT.tablet}) {
      font-size: 62%;
    }
    width: 100dvw;
    height: 100dvh;
    overflow: hidden;

    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;

    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
  }
  body{
    width: 100%;
    height: 100%;
    background-color: #2F2F2F;
    color: white;
    font-size: ${FONT_SIZE.regular}
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
