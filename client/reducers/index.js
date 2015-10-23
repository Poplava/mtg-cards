import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';

import user from './user';
import cards from './cards';
import games from './games';

const rootReducer = combineReducers({
  router,
  user
  //cards,
  //games
});

export default rootReducer;
