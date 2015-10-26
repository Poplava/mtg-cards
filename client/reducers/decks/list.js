import { Map, List, OrderedMap, fromJS } from 'immutable';

import * as types from '../../constants/decks/ActionTypes';

const initialState = new Map({
  status: 'success',
  total: 0,
  decks: new OrderedMap()
});

export default function list(state = initialState, action = {}) {
  switch (action.type) {
    case types.DECKS_LIST__REQUEST:
      return state.set('status', 'request');

    case types.DECKS_LIST__SUCCESS:
      state = state.set('status', 'success');
      state = state.set('total', action.total);
      return state.set('decks', new OrderedMap(action.decks.map(deck => [deck._id, fromJS(deck)])));

    case types.DECKS_LIST__ERROR:
      return state.set('status', 'success');

    default:
      return state;
  }
};
