import { createGlobalStyle } from 'styled-components'
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 15px;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
.button-close-modal{
     position: absolute;
    left: 90%;
    top: 5%;
    cursor: pointer;
    color: rgb(0, 0, 0);
    background-color: aliceblue;
    border-color: transparent;
    border-radius: 5px;
}
`;