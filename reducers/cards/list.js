import * as types from '../../constants/cards/ActionTypes';

const initialState = {
  status: 'success',
  cards: []
};

export default function app(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
};
