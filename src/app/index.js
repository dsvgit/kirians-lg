import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import App from './app';

export default () => (
  <Router history={history} initialEntries={['/error']} initialIndex={0}>
    <App />
  </Router>
);
