import * as types from '../constants/cards/ActionTypes';
import request from 'superagent';

export function formChange(key, value) {
  return {
    type: types.CARDS_FORM_CHANGE,
    key,
    value
  };
}

export function formChangeColor(color, checked) {
  return {
    type: types.CARDS_FORM_CHANGE_COLOR,
    color,
    checked
  };
}

export function setQuery(params) {
  return {
    type: types.CARDS_SET_QUERY,
    query: Object.assign({}, params)
  };
}

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

export function requestCards() {
  return (dispatch, getState) => {
    var query = getState().cards.list.query;

    dispatch(_request());

    request
      .get('/_/cards')
      .query(query)
      .end(function(err, res){
        if (err) {
          return dispatch(_error());
        }

        return dispatch(_success(res.body));
      });
  };
}
