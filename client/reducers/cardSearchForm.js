import merge from 'lodash/object/merge';

import * as Constants from '../../shared/Constants';
import * as types from '../actions/CardSearchFormActions';

const initialState = {
  params: {
    name: '',
    types: [],
    colors: []
  },
  skip: 0,
  limit: Constants.LIMIT,
  query: {}
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case types.CARD_SEARCH_FORM__CHANGE_TEXT:
      return merge({}, state, { params: { [action.name]: action.value } });

    case types.CARD_SEARCH_FORM__CHANGE_CHECKBOX:
      return changeCheckbox(state, action);

    case types.CARD_SEARCH_FORM__SET_QUERY:
      return merge({}, state, {
        query: merge({}, action.params, { skip: 0, limit: Constants.LIMIT })
      });

    default:
      return state;
  }
};

function changeCheckbox(state, action) {
  state = merge({}, state, {
    params: {
      [action.name]: state.params[action.name].filter(item => item !== action.value)
    }
  });

  if (action.checked) {
    state = merge({}, state, {
      params: {
        [action.name]: [...state.params[action.name], action.value]
      }
    });
  }

  return state;
}
