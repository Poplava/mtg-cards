import merge from 'lodash/object/merge';
import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  router
});

export default rootReducer;
