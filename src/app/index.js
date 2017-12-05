import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import App from './app';
import history from './history';
import store from './store';

import './theme/fonts.scss';

export default props => {
  return (
  <Provider store={store}>
    <Router history={history} initialEntries={['/error']} initialIndex={0}>
      <App />
    </Router>
  </Provider>
  );
}
