import { fromJS } from 'immutable';

const initialState = fromJS(__INITIAL_STATE.user);

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
};
