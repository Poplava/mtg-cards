import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './containers/App';
import CardsPage from './containers/CardsPage';

export default (
  <Route component={App}>
    <Route path="/cards" component={CardsPage} />
    <Redirect from="*" to="/cards" />
  </Route>
);
