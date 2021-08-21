import { createGlobalStyle } from 'styled-components/macro';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
	${reset}

  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'GmarketSansBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
	
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
  html {
    font-size: 62.5%;

  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ol,
  ul,
  li {
    list-style: none;
  }
  img {
    max-width: 100%;
  }
  button {
    border: 0;
    padding: 0;
    background: none;
    outline: none;
    cursor: pointer;
  }
  .a11y {
    overflow: hidden;
    position: absolute;
    border: 0;
    width: 1px;
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
  }
	`;

export default GlobalStyle;
