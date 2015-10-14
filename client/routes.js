import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './containers/App';
import CardsPage from './containers/CardsPage';
import GamePage from './containers/GamePage';
import MyPage from './containers/MyPage';

export default (
  <Route component={App}>
    <Route path="/cards" component={CardsPage} />
    <Route path="/games" component={GamePage} />
    <Route path="/my" component={MyPage} />
    <Redirect from="*" to="/cards" />
  </Route>
);
