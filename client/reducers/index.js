import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';

import user from './user';
import cards from './cards';
import decks from './decks';
import deckView from './deckView';

const rootReducer = combineReducers({
  router,
  user,
  cards,
  decks,
  deckView
});

export default rootReducer;
