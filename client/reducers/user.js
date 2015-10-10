import * as types from '../constants/user/ActionTypes';

const initialState = {
  status: null,
  user: null
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case types.USER_REQUEST:
      return Object.assign({}, state, {
        status: 'request'
      });

    case types.USER_SUCCESS:
      return Object.assign({}, state, {
        status: 'success',
        user: action.user
      });

    case types.USER_ERROR:
      return Object.assign({}, state, {
        status: 'error',
        user: null
      });

    default:
      return state;
  }
};
