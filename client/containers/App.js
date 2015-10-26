import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Layout from '../components/app/Layout';

class App extends Component {
  render() {
    const { children, user } = this.props;

    return (
      <Layout user={user}>
        {children}
        <br/>
        <br/>
        <br/>
        <br/>
      </Layout>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  user: PropTypes.object
};

function mapStateToProps(state) {
  const { user } = state;

  return {
    user: user && user.toJS()
  };
}

export default connect(mapStateToProps)(App);
