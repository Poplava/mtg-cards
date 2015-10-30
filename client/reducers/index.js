import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';

import entities from './entities';
import app from './app';

const rootReducer = combineReducers({
  router,
  entities,
  app
});

export default rootReducer;
