import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'Global.style';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={{}}>
      <App />
      <GlobalStyle/>
    </ThemeProvider>
  </StrictMode>
);
