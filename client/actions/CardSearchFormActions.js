export const CARD_SEARCH_FORM__CHANGE_TEXT = 'CARD_SEARCH_FORM__CHANGE_TEXT';
export const CARD_SEARCH_FORM__CHANGE_CHECKBOX = 'CARD_SEARCH_FORM__CHANGE_CHECKBOX';
export const CARD_SEARCH_FORM__SET_QUERY = 'CARD_SEARCH_FORM__SET_QUERY';
export const CARD_SEARCH_FORM__REQUEST = 'CARD_SEARCH_FORM__REQUEST';
export const CARD_SEARCH_FORM__SUCCESS = 'CARD_SEARCH_FORM__SUCCESS';
export const CARD_SEARCH_FORM__ERROR = 'CARD_SEARCH_FORM__ERROR';

import { requestCards } from '../utils/APIUtils';

function _changeText(name, value) {
  return {
    type: CARD_SEARCH_FORM__CHANGE_TEXT,
    name,
    value
  };
}

function _changeCheckbox(name, value, checked) {
  return {
    type: CARD_SEARCH_FORM__CHANGE_CHECKBOX,
    name,
    value,
    checked
  };
}

function _setQuery(params) {
  return {
    type: CARD_SEARCH_FORM__SET_QUERY,
    params
  };
}

function _request() {
  return {
    type: CARD_SEARCH_FORM__REQUEST
  };
}

function _success(response) {
  return {
    type: CARD_SEARCH_FORM__SUCCESS,
    response
  };
}

function _error() {
  return {
    type: CARD_SEARCH_FORM__ERROR
  };
}

export function changeText(name, value) {
  return _changeText(name, value);
}

export function changeCheckbox(name, value, checked) {
  return _changeCheckbox(name, value, checked);
}

export function submit(params) {
  return (dispatch, getState) => {
    dispatch(_setQuery(params));
    dispatch(_request());

    requestCards(getState().cardSearchForm.query)
      .then(
        response => dispatch(_success(response)),
        err => dispatch(_error(err))
      );
  };
}
