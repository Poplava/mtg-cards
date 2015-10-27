import request from 'superagent';

import * as types from '../constants/deckView/ActionTypes';

function _nameChange(name) {
  return {
    type: types.DECK_VIEW__NAME__CHANGE,
    name
  };
}

function _arrayChange(key, value, checked) {
  return {
    type: types.DECK_VIEW__ARRAY__CHANGE,
    key,
    value,
    checked
  };
}

export function nameChange(name) {
  return _nameChange(name);
}

export function arrayChange(key, value, checked) {
  return _arrayChange(key, value, checked);
}
