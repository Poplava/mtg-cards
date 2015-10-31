import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './containers/App';
import CardListPage from './containers/CardListPage';
import DeckListPage from './containers/DeckListPage';


export default (
  <Route component={App}>
    <Route path="/cards" component={CardListPage} />
    <Route path="/decks" component={DeckListPage} />
    <Redirect from="*" to="/cards" />
  </Route>
);
