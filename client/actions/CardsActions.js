import request from 'superagent';

import * as types from '../constants/cards/ActionTypes';

import { pushState } from 'redux-router';

function _formSubmit(query) {
  return {
    type: types.CARDS_FORM__SUBMIT,
    query
  };
}

function _formSetParams(params) {
  return {
    type: types.CARDS_FORM__SET_PARAMS,
    params
  };
}

function _formChange(key, value) {
  return {
    type: types.CARDS_FORM__CHANGE,
    key,
    value
  };
}

function _formMore() {
  return {
    type: types.CARDS_FORM__MORE
  };
}

function _listRequest() {
  return {
    type: types.CARDS_LIST__REQUEST
  };
}

function _listSuccess(res) {
  return {
    type: types.CARDS_LIST__SUCCESS,
    cards: res.cards,
    total: res.total
  };
}

function _listError(err) {
  return {
    type: types.CARDS_LIST__ERROR,
    err
  };
}

function _itemAddRequest(id) {
  return {
    type: types.CARDS_ITEM__ADD_REQUEST,
    id
  };
}

function _itemAddSuccess(id, card) {
  return {
    type: types.CARDS_ITEM__ADD_SUCCESS,
    id,
    card
  };
}

function _itemAddError(id, err) {
  return {
    type: types.CARDS_ITEM__ADD_ERROR,
    id,
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
    dispatch(pushState(null, '/cards', params));

    dispatch(_formSubmit(params));
    dispatch(_listRequest());

    request
      .get('/_/cards')
      .query(getState().cards.form.get('query').toJS())
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
      .get('/_/cards')
      .query(getState().cards.form.get('query').toJS())
      .end((err, res) => {
        if (err) {
          return dispatch(_listError(err));
        }

        return dispatch(_listSuccess(res.body));
      });
  };
}

export function itemAdd(id) {
  return dispatch => {
    dispatch(_itemAddRequest(id));

    request
      .post(`/_/cards/${id}/games`)
      .send({})
      .end((err, res) => {
        if (err) {
          return dispatch(_itemAddError(id, err));
        }

        return dispatch(_itemAddSuccess(id, res.body));
      });
  };
}
