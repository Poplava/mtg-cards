import { Map, List, fromJS } from 'immutable';

import * as types from '../../constants/cards/ActionTypes';

const initialState = fromJS({
  status: 'success',
  cards: []
});

export default function list(state = initialState, action = {}) {
  switch (action.type) {
    case types.CARDS_FORM__SUBMIT:
      return state.set('cards', new List());

    case types.CARDS_LIST__REQUEST:
      return state.set('status', 'request');

    case types.CARDS_LIST__SUCCESS:
      state = state.set('cards', fromJS([...state.get('cards').toJS(), ...action.cards]));
      return state.set('status', 'success');

    default:
      return state;
  }
};
