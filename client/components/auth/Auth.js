import React, { Component, PropTypes } from 'react';

import './Auth.less';

class Auth extends Component {
  render() {
    return (
      <div className="Auth__root">
        <a className="Auth__button" href="/auth/google">Connect with Google</a>
      </div>
    );
  }
}

export default Auth;
