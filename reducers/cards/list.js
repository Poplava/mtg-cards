import * as types from '../../constants/cards/ActionTypes';

const initialState = {
  status: 'success',
  cards: [],
  total: null,
  query: {}
};

export default function app(state = initialState, action = {}) {
  switch (action.type) {
    case types.CARDS_SET_QUERY:
      return Object.assign({}, state, {
        query: action.query
      });

    case types.CARDS_REQUEST:
      return Object.assign({}, state, {
        status: 'request',
        cards: [],
        total: null
      });

    case types.CARDS_SUCCESS:
      return Object.assign({}, state, {
        status: 'success',
        cards: action.cards,
        total: action.total
      });

    case types.CARDS_ERROR:
      return Object.assign({}, state, {
        status: 'error',
        cards: [],
        total: null
      });

    default:
      return state;
  }
};
