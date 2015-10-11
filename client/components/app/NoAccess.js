import React, { Component, PropTypes } from 'react';

class NoAccess extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="auth">
              <h1>MTG Game Cards</h1>
              <h3>You don't have rights to access this application.</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NoAccess.propTypes = {};

NoAccess.defaultProps = {};

export default NoAccess;
