import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './containers/App';
import CardsPage from './containers/CardsPage';
import DecksPage from './containers/DecksPage';

export default (
  <Route component={App}>
    <Route path="/cards" component={CardsPage} />
    <Route path="/decks" component={DecksPage} />
    <Redirect from="*" to="/cards" />
  </Route>
);
