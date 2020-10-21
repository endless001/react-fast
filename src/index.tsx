import React from 'react';
import ReactDOM from 'react-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { Provider } from 'react-redux'
import App from './App';

import store from "./store";

const options = {
    position: positions.TOP_RIGHT,
    timeout: 2000,
    offset: '30px',
    transition: transitions.SCALE
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store as any}>
            <AlertProvider template={AlertTemplate} {...options}>
              <App  />
            </AlertProvider>
        </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

