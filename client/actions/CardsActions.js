import * as types from '../constants/cards/ActionTypes';
import { pushState } from 'redux-router';

export function formChange(key, value) {
  return {
    type: types.CARDS_FORM_CHANGE,
    key,
    value
  };
}

export function formSubmit(params) {
  return dispatch => {
    dispatch({
      type: types.CARDS_FORM_SUBMIT
    });
    dispatch(pushState(null, '/cards', params));
  };
}

export function formSetParams(params) {
  return {
    type: types.CARDS_FORM_SET_PARAMS,
    params
  };
}
