import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MasterStyle } from './globals/styles.globals'
import { ControlGlobalStyle } from './controls/styles.controls';

import { Provider } from './models'
import { AuthProvider } from './models/_auth.models'


ReactDOM.render(
  <React.StrictMode>
    <MasterStyle>
      <ControlGlobalStyle />
      <AuthProvider>
        <Provider>
          <App />
        </Provider>
      </AuthProvider>
    </MasterStyle>
  </React.StrictMode>,
  document.getElementById('root')
);

