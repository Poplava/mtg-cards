import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './containers/App';
import CardsPage from './containers/CardsPage';
import DecksListPage from './containers/decks/ListPage';
import DecksViewPage from './containers/decks/ViewPage';


export default (
  <Route component={App}>
    <Route path="/cards" component={CardsPage} />
    <Route path="/decks" component={DecksListPage} />
    <Route path="/decks/:id" component={DecksViewPage} />
    <Redirect from="*" to="/cards" />
  </Route>
);
