import request from 'superagent';

import * as types from '../constants/cards/ActionTypes';

import { pushState } from 'redux-router';

function _request() {
  return {
    type: types.CARDS_REQUEST
  };
}

function _success(res) {
  return {
    type: types.CARDS_SUCCESS,
    cards: res.cards,
    total: res.total
  };
}

function _error() {
  return {
    type: types.CARDS_ERROR
  };
}

function _submit(query) {
  return {
    type: types.CARDS_FORM_SUBMIT,
    query
  };
}


export function formChange(key, value) {
  return {
    type: types.CARDS_FORM_CHANGE,
    key,
    value
  };
}

export function formSubmit(params) {
  return (dispatch, getState) => {
    dispatch(pushState(null, '/cards', params));

    dispatch(_submit(params));
    dispatch(_request());

    request
      .get('/_/cards')
      .query(getState().cards.form.query)
      .end(function(err, res){
        if (err) {
          return dispatch(_error());
        }

        return dispatch(_success(res.body));
      });
  };
}

export function formSetParams(params) {
  return {
    type: types.CARDS_FORM_SET_PARAMS,
    params
  };
}
