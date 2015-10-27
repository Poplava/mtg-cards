import { Map, fromJS } from 'immutable';

import * as types from '../../constants/deckView/ActionTypes';
import * as Constants from '../../constants/deckView/Constants';

initialState = new Map({
  params: {
    name: '',
    types: new Map(Constants.PARAMS_TYPES.map(value => [value, false])),
    cmc: new Map(Constants.PARAMS_CMC.map(value => [value, false]))
  },
  limit: 10,
  skip: 0,
  query: new Map()
});

export default function form(state = initialState, action = {}) {
  switch (action.type) {
    case types.DECK_VIEW__NAME__CHANGE:
      return state.setIn(['params', 'name'], action.name);

    case types.DECK_VIEW__ARRAY__CHANGE:
      return state.setIn(['params', action.key, action.value], action.checked);

    default:
      return state;
  }
};
