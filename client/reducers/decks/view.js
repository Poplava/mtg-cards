import { Map, List, OrderedMap, fromJS } from 'immutable';

import * as types from '../../constants/decks/ActionTypes';

const initialState = new Map({
  status: 'request',
  deck: null
});

export default function view(state = initialState, action = {}) {
  switch (action.type) {
    case types.DECKS_VIEW__REQUEST:
      return state.set('status', 'request');

    case types.DECKS_VIEW__SUCCESS:
      state = state.set('status', 'success');
      return state.set('deck', fromJS(action.deck));

    case types.DECKS_VIEW__ERROR:
      return initialState;

    default:
      return state;
  }
};
