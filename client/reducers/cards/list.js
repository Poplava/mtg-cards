import * as types from '../../constants/cards/ActionTypes';

const initialState = {
  status: 'success',
  cards: []
};

export default function list(state = initialState, action = {}) {
  switch (action.type) {
    case types.CARDS_FORM_SUBMIT:
      return Object.assign({}, state, {
        cards: []
      });

    case types.CARDS_REQUEST:
      return Object.assign({}, state, {
        status: 'request'
      });

    case types.CARDS_SUCCESS:
      return Object.assign({}, state, {
        status: 'success',
        cards: [...state.cards, ...action.cards]
      });

    default:
      return state;
  }
};
