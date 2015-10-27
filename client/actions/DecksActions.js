import request from 'superagent';

import * as types from '../constants/decks/ActionTypes';

import { pushState } from 'redux-router';

function _listRequest() {
  return {
    type: types.DECKS_LIST__REQUEST
  };
}

function _listSuccess(decks, total) {
  return {
    type: types.DECKS_LIST__SUCCESS,
    decks,
    total
  };
}

function _listError(err) {
  return {
    type: types.DECKS_LIST__ERROR,
    err
  };
}

function _formChange(key, value) {
  return {
    type: types.DECKS_FORM__CHANGE,
    key,
    value
  };
}

function _formRequest() {
  return {
    type: types.DECKS_FORM__REQUEST
  };
}

function _formSuccess() {
  return {
    type: types.DECKS_FORM__SUCCESS
  };
}

function _formError() {
  return {
    type: types.DECKS_FORM__ERROR
  };
}

function _viewRequest() {
  return {
    type: types.DECKS_VIEW__REQUEST
  };
}

function _viewSuccess(deck) {
  return {
    type: types.DECKS_VIEW__SUCCESS,
    deck
  };
}

function _viewError(err) {
  return {
    type: types.DECKS_VIEW__ERROR,
    err
  };
}

// ActionCreators

export function listRequest() {
  return dispatch => {
    dispatch(_listRequest());

    return request
      .get('/_/decks')
      .end((err, { body }) => {
        if (err) {
          return dispatch(_listError(err));
        }

        return dispatch(_listSuccess(body.decks, body.total));
      });
  };
}

export function formChange(key, value) {
  return _formChange(key, value);
}

export function formSubmit(title) {
  return dispatch => {

    return request
      .post('/_/decks')
      .send({ title })
      .end((err, res) => {
        if (err) {
          return dispatch(_formError(err));
        }

        dispatch(listRequest());

        return dispatch(_formSuccess());
      });
  };
}

export function viewRequest(id) {
  return dispatch => {
    dispatch(_viewRequest());

    return request
      .get(`/_/decks/${id}`)
      .end((err, { body }) => {
        if (err) {
          return dispatch(_viewError(err));
        }

        return dispatch(_viewSuccess(body));
      });
  };
}
