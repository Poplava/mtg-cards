import * as types from '../../constants/cards/ActionTypes';

const initialState = {
  params: {
    name: ''
  }
};

export default function app(state = initialState, action = {}) {
  switch (action.type) {
    case types.CARDS_FORM_SET_PARAMS:
      return Object.assign({}, state, {
        params: action.params
      });

    case types.CARDS_FORM_CHANGE:
      return Object.assign({}, state, {
        params: Object.assign({}, state.params, {
          [action.key]: action.value
        })
      });

    default:
      return state;
  }
};
