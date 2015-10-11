import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { requestMe } from '../actions/UserActions';

import Layout from '../components/app/Layout';

class App extends Component {
  componentDidMount() {
    this.props.requestMe();
  }

  render() {
    const { children, status, user } = this.props;

    if (status !== 'success') {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }

    return (
      <Layout user={user}>
        {children}
      </Layout>
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
