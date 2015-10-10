import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { requestMe } from '../actions/UserActions';

import Auth from '../components/app/Auth';

class App extends Component {
  componentDidMount() {
    this.props.requestMe();
  }

  render() {
    const { children, status, user } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>App</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Auth user={user} />
            {
              status === 'success' ?
                <div>{children}</div> : <div>Foooooooo....</div>
            }
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  status: PropTypes.string,
  requestMe: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    status: state.user.status,
    user: state.user.user
  };
}

export default connect(mapStateToProps, {
  requestMe
})(App);
