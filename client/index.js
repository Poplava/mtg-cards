import 'babel-core/polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import configureStore from './store/configureStore';

import request from 'superagent';
window._r = request;

//import './components/app/less/bootstrap.less';

const store = configureStore();
window._s = store;

render(
  <Provider store={store}>
    <ReduxRouter />
  </Provider>,
  document.getElementById('root')
);
