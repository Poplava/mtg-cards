import * as types from '../constants/cards/ActionTypes';

export function formChange(key, value) {
  return {
    type: types.CARDS_FORM_CHANGE,
    key,
    value
  };
}
