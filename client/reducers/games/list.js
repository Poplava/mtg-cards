import { Map, List, OrderedMap, fromJS } from 'immutable';

import * as types from '../../constants/games/ActionTypes';

const initialState = new Map({
  status: 'success',
  items: new OrderedMap()
});

export default function list(state = initialState, action = {}) {
  switch (action.type) {
    case types.GAMES_FORM__SUBMIT:
      return state.set('items', new OrderedMap());

    case types.GAMES_LIST__REQUEST:
      return state.set('status', 'request');

    case types.GAMES_LIST__SUCCESS:
      action.items.forEach(item => {
        state = state.setIn(['items', item._id], fromJS({
          status: 'success',
          item
        }));
      });
      return state.set('status', 'success');

    default:
      return state;
  }
};
