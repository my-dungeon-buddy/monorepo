import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components'

import App from './app';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
