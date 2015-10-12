import * as types from '../../constants/cards/ActionTypes';

const initialState = {
  params: {},
  query: {},
  offset: 0,
  limit: 10,
  total: null
};

export default function form(state = initialState, action = {}) {
  switch (action.type) {
    case types.CARDS_FORM_SET_PARAMS:
      return Object.assign({}, state, {
        params: action.params
      });

    case types.CARDS_FORM_CHANGE:
      if (action.value) {
        return Object.assign({}, state, {
          params: Object.assign({}, state.params, {
            [action.key]: action.value
          })
        });
      } else {
        const params = Object.assign({}, state.params);
        delete(params[action.key]);
        return Object.assign({}, state, {
          params
        });
      }

    case types.CARDS_FORM_SUBMIT:
      return Object.assign({}, state, {
        query: Object.assign({}, state.params, {
          offset: state.offset,
          limit: state.limit
        })
      });

    default:
      return state;
  }
};
