import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from './models'
import {AuthProvider} from './models/_auth.models'


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider>
    <App />
    </Provider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

