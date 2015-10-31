export const CARD_LIST__CHANGE_TEXT = 'CARD_LIST__CHANGE_TEXT';
export const CARD_LIST__CHANGE_CHECKBOX = 'CARD_LIST__CHANGE_CHECKBOX';
export const CARD_LIST__SET_QUERY = 'CARD_LIST__SET_QUERY';
export const CARD_LIST__SUBMIT = 'CARD_LIST__SUBMIT';
export const CARD_LIST__REQUEST = 'CARD_LIST__REQUEST';
export const CARD_LIST__SUCCESS = 'CARD_LIST__SUCCESS';
export const CARD_LIST__ERROR = 'CARD_LIST__ERROR';
export const CARD_LIST__GAME_SUCCESS = 'CARD_LIST__GAME_SUCCESS';

import { requestCards, putGame } from '../utils/APIUtils';

function _changeText(name, value) {
  return {
    type: CARD_LIST__CHANGE_TEXT,
    name,
    value
  };
}

function _changeCheckbox(name, value, checked) {
  return {
    type: CARD_LIST__CHANGE_CHECKBOX,
    name,
    value,
    checked
  };
}

function _setQuery(params) {
  return {
    type: CARD_LIST__SET_QUERY,
    params
  };
}

function _submit() {
  return {
    type: CARD_LIST__SUBMIT
  };
}

function _request() {
  return {
    type: CARD_LIST__REQUEST
  };
}

function _success(response) {
  return {
    type: CARD_LIST__SUCCESS,
    response
  };
}

function _error() {
  return {
    type: CARD_LIST__ERROR
  };
}

function _gameSuccess(response) {
  return {
    type: CARD_LIST__GAME_SUCCESS,
    response
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
    dispatch(_submit());
    dispatch(_setQuery(params));
    dispatch(_request());

    requestCards(getState().cardList.query)
      .then(
        response => dispatch(_success(response)),
        err => dispatch(_error(err))
    );
  };
}

export function more() {
  return (dispatch, getState) => {
    dispatch(_setQuery(getState().cardList.query));
    dispatch(_request());

    requestCards(getState().cardList.query)
      .then(
        response => dispatch(_success(response)),
        err => dispatch(_error(err))
    );
  };
}

export function submitGame(card, total) {
  return dispatch => {
    putGame(card, total)
      .then(
        response => dispatch(_gameSuccess(response))
      );
  };
}
