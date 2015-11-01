import React from 'react';
import { Route, Redirect } from 'react-router';
import Shell from './containers/Shell';
import CardList from './containers/CardList';
//import CardListPage from './containers/CardListPage';
//import DeckListPage from './containers/DeckListPage';


export default (
  <Route component={Shell}>
    <Route path="/cards" component={CardList} />
    <Redirect from="*" to="/cards" />
  </Route>
);
