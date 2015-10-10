import * as types from '../constants/user/ActionTypes';
import request from 'superagent';

function _request() {
  return {
    type: types.USER_REQUEST
  };
}

function _success(user) {
  return {
    type: types.USER_SUCCESS,
    user
  };
}

function _error(error) {
  return {
    type: types.USER_ERROR,
    error
  };
}

export function requestMe() {
  return dispatch => {
    dispatch(_request());

    return request
      .get('/_/users/me')
      .end(function(err, res){
        if (err) {
          return dispatch(_error(err));
        }

        return dispatch(_success(res.body));
      });

  };
}
