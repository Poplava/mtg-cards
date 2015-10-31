import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';

import entities from './entities';
import app from './app';
import cardList from './cardList';

const rootReducer = combineReducers({
  router,
  entities,
  app,
  cardList
});

export default rootReducer;
