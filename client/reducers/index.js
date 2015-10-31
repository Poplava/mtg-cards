import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';

import entities from './entities';
import app from './app';
import cardSearchForm from './cardSearchForm';

const rootReducer = combineReducers({
  router,
  entities,
  app,
  cardSearchForm
});

export default rootReducer;
