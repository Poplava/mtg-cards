import { Map, List, OrderedMap, fromJS } from 'immutable';

import * as types from '../../constants/cards/ActionTypes';

const initialState = new Map({
  status: 'success',
  cards: new OrderedMap()
});

export default function list(state = initialState, action = {}) {
  switch (action.type) {
    case types.CARDS_FORM__SUBMIT:
      return state.set('cards', new OrderedMap());

    case types.CARDS_LIST__REQUEST:
      return state.set('status', 'request');

    case types.CARDS_LIST__SUCCESS:
      action.cards.forEach(card => {
        state = state.setIn(['cards', card._id], fromJS({
          status: 'success',
          card
        }));
      });
      return state.set('status', 'success');

    case types.CARDS_ITEM__ADD_REQUEST:
      return state.setIn(['cards', action.id, 'status'], 'request');

    case types.CARDS_ITEM__ADD_ERROR:
      return state.setIn(['cards', action.id, 'status'], 'success');

    case types.CARDS_ITEM__ADD_SUCCESS:
      state = state.setIn(['cards', action.id, 'status'], 'success');
      return state.setIn(['cards', action.id, 'card'], fromJS(action.card));

    default:
      return state;
  }
};
