import { Map, fromJS } from 'immutable';

import * as types from '../../constants/cards/ActionTypes';

const initialState = fromJS({
  params: {},
  query: {},
  offset: 0,
  limit: 10,
  total: null,
  moreExists: false
});

export default function form(state = initialState, action = {}) {
  switch (action.type) {
    case types.CARDS_FORM__SUBMIT:
      state = state.set('query', (new Map({
        offset: 0,
        limit: 10
      }).merge(state.get('params'))));
      state = state.set('offset', 0);
      return state.set('limit', 10);

    case types.CARDS_FORM__SET_PARAMS:
      return state.set('params', fromJS(action.params));

    case types.CARDS_FORM__CHANGE:
      if (action.value) {
        return state.setIn(['params', action.key], fromJS(action.value));
      } else {
        return state.deleteIn(['params', action.key]);
      }

    case types.CARDS_FORM__MORE:
      return state.mergeIn(['query'], new Map({
        offset: state.get('offset'),
        limit: state.get('limit')
      }));

    case types.CARDS_LIST__SUCCESS:
      state = state.set('total', action.total);
      state = state.set('offset', state.get('offset') + state.get('limit'));
      return state.set('moreExists', state.get('offset') < state.get('total'));

    default:
      return state;
  }
};
