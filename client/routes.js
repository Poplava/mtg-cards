import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './containers/App';
import CardListPage from './containers/CardListPage';


export default (
  <Route component={App}>
    <Route path="/cards" component={CardListPage} />
    <Redirect from="*" to="/cards" />
  </Route>
);
