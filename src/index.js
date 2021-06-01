import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './App';
import * as serviceWorker from './serviceWorker';
=======
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Routes } from "./app/routes";
import { persistor, store } from "./config";
import "./assets/scss/style.scss";
import './index.scss'
>>>>>>> 29399402f9cabe37454440b81627148b441f7e3e

import * as serviceWorker from './serviceWorker';
import { icons } from './assets/icons'

<<<<<<< HEAD
import { Provider } from 'react-redux'
import store from './store'

=======
>>>>>>> 29399402f9cabe37454440b81627148b441f7e3e
React.icons = icons

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
