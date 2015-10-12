import * as types from '../../constants/cards/ActionTypes';

const initialState = {
  params: {},
  query: {},
  offset: 0,
  limit: 10,
  total: null,
  moreExists: false
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
          offset: 0,
          limit: 10
        }),
        offset: 0,
        limit: 10
      });

    case types.CARDS_FORM_MORE:
      return Object.assign({}, state, {
        query: Object.assign({}, state.query, {
          offset: state.offset,
          limit: state.limit
        })
      });

    case types.CARDS_SUCCESS:
      return Object.assign({}, state, {
        total: action.total,
        offset: state.offset + state.limit,
        moreExists: (state.offset + state.limit) < action.total
      });

    default:
      return state;
  }
};
