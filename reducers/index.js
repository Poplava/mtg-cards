import merge from 'lodash/object/merge';
import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';

import cards from './cards';

const rootReducer = combineReducers({
  router,
  cards
});

export default rootReducer;
