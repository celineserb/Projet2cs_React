import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/integration/react'

import { icons } from './assets/icons'

import { Provider } from 'react-redux'
import { store, persistor } from './config'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './app/routes/Routes';

React.icons = icons

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={"loading..."} persistor={persistor}>
      <BrowserRouter basename={"/"}>
        <Routes />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
