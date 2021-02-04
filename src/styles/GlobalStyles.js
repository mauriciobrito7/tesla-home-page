import { createGlobalStyle } from "styled-components";
import icielMediumFont from "../fonts/iCiel-Medium.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face{ 
    font-family: 'iCielMedium';
    src: local('iCielMedium'), url(${icielMediumFont}) format('truetype');
    font-weight: normal;
  }
  * {
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'iCielMedium', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
