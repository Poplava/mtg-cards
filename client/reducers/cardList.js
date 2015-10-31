import merge from 'lodash/object/merge';
import assign from 'lodash/object/assign';
import uniq from 'lodash/array/uniq';

import * as Constants from '../../shared/Constants';
import * as types from '../actions/CardListActions';

const initialState = {
  status: 'success',
  cards: [],
  params: {
    name: '',
    types: [],
    colors: [],
    cmc: []
  },
  total: 0,
  skip: 0,
  limit: Constants.LIMIT,
  query: {}
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case types.CARD_LIST__CHANGE_TEXT:
      return merge({}, state, { params: { [action.name]: action.value } });

    case types.CARD_LIST__CHANGE_CHECKBOX:
      return changeCheckbox(state, action);

    case types.CARD_LIST__SET_QUERY:
      return assign({}, state, {
        query: assign({}, action.params, { skip: 0, limit: Constants.LIMIT })
      });

    case types.CARD_LIST__SUBMIT:
      return assign({}, state, {
        cards: []
      });

    case types.CARD_LIST__REQUEST:
      return merge({}, state, {
        status: 'request'
      });

    case types.CARD_LIST__SUCCESS:
      return merge({}, state, {
        status: 'success',
        cards: uniq([...state.cards, ...action.response.result.cards]),
        total: action.response.result.total
      });

    case types.CARD_LIST__ERROR:
      return merge({}, state, {
        status: 'success'
      });

    default:
      return state;
  }
};

function changeCheckbox(state, action) {
  state = assign({}, state, {
    params: assign({}, state.params, {
      [action.name]: state.params[action.name].filter(item => item !== action.value)
    })
  });

  if (action.checked) {
    state = assign({}, state, {
      params: assign({}, state.params, {
        [action.name]: [...state.params[action.name], action.value]
      })
    });
  }

  return state;
}
