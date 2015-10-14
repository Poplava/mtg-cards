import request from 'superagent';

import * as types from '../constants/games/ActionTypes';

import { pushState } from 'redux-router';

function _formSubmit(query) {
  return {
    type: types.GAMES_FORM__SUBMIT,
    query
  };
}

function _formSetParams(params) {
  return {
    type: types.GAMES_FORM__SET_PARAMS,
    params
  };
}

function _formChange(key, value) {
  return {
    type: types.GAMES_FORM__CHANGE,
    key,
    value
  };
}

function _formMore() {
  return {
    type: types.GAMES_FORM__MORE
  };
}

function _listRequest() {
  return {
    type: types.GAMES_LIST__REQUEST
  };
}

function _listSuccess(res) {
  return {
    type: types.GAMES_LIST__SUCCESS,
    items: res.games,
    total: res.total
  };
}

function _listError(err) {
  return {
    type: types.GAMES_LIST__ERROR,
    err
  };
}

// ActionCreators

export function formChange(key, value) {
  return _formChange(key, value);
}

export function formSetParams(params) {
  return _formSetParams(params);
}

export function formSubmit(params) {
  return (dispatch, getState) => {
    dispatch(pushState(null, '/games', params));

    dispatch(_formSubmit(params));
    dispatch(_listRequest());

    request
      .get('/_/games')
      .query(getState().games.form.get('query').toJS())
      .end((err, res) => {
        if (err) {
          return dispatch(_listError(err));
        }

        return dispatch(_listSuccess(res.body));
      });
  };
}

export function formMore() {
  return (dispatch, getState) => {
    dispatch(_formMore());
    dispatch(_listRequest());

    request
      .get('/_/games')
      .query(getState().games.form.get('query').toJS())
      .end((err, res) => {
        if (err) {
          return dispatch(_listError(err));
        }

        return dispatch(_listSuccess(res.body));
      });
  };
}
