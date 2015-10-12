import * as types from '../../constants/cards/ActionTypes';

const initialState = {
  status: 'success',
  list: []
};

export default function list(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
};
