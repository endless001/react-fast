import React from 'react';
import ReactDOM from 'react-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { Provider } from 'react-redux'
import App from './App';
import configureStore from './store/configureStore';



const options = {
    // you can also just use 'bottom center'
    position:  positions.TOP_RIGHT,
    timeout: 2000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
}
const store = (): object => {
    const store = Object.assign({}, null);
    return configureStore(store);
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store()}>
            <AlertProvider template={AlertTemplate} {...options}>
              <App  />
            </AlertProvider>
        </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

