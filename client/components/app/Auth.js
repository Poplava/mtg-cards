import React, { Component, PropTypes } from 'react';

class Auth extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        {
          !user ?
            <a href="/auth/google">Auth</a> : null
        }
      </div>
    );
  }
}

Auth.propTypes = {
  user: PropTypes.object
};

export default Auth;
