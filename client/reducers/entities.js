import merge from 'lodash/object/merge';

const initialState = {
  users: {}
};

export default function(state = initialState, action = {}) {
  const { response } = action;

  if (response && response.entities) {
    return merge({}, state, response.entities);
  }

  return state;
};
