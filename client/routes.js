import React from 'react';
import { Route, Redirect } from 'react-router';
import Shell from './containers/Shell';
import CardListPage from './containers/CardListPage';

export default (
  <Route component={Shell}>
    <Route path="/cards" component={CardListPage} />
    <Redirect from="*" to="/cards" />
  </Route>
);
