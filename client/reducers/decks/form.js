import { Map, List, OrderedMap, fromJS } from 'immutable';

import * as types from '../../constants/decks/ActionTypes';

const initialState = new Map({
  status: 'success',
  title: ''
});

export default function list(state = initialState, action = {}) {
  switch (action.type) {
    case types.DECKS_FORM__CHANGE:
      return state.set(action.key, action.value);

    case types.DECKS_FORM__REQUEST:
      return state.set('status', 'request');

    case types.DECKS_FORM__SUCCESS:
    case types.DECKS_FORM__ERROR:
      state = state.set('status', 'success');
      return state.set('title', '');

    case types.DECKS_LIST__ERROR:
      return initialState;

    default:
      return state;
  }
};
