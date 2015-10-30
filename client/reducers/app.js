import merge from 'lodash/object/merge';

import * as types from '../actions/AppActions';

const initialState = {
  user: null
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case types.APP__INITIALIZE:
      return merge({}, state, action.response.result);

    default:
      return state;
  }
};
