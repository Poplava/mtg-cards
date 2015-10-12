import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';

import user from './user';
import cards from './cards';

const rootReducer = combineReducers({
  router,
  user,
  cards
});

export default rootReducer;
