import React, { Component, PropTypes } from 'react';

class Auth extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="auth">
              <h1>MTG Game Cards</h1>
              <h3>Authorization</h3>
              <a className="btn btn-danger" href="/auth/google">Login with Google</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
