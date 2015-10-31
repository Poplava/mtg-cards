import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { initialize } from '../actions/AppActions';

import AppRoot from '../components/app/App';

class App extends Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    const { children, user } = this.props;

    return (
      <AppRoot user={user}>
        {children}
      </AppRoot>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  user: PropTypes.object,
  initialize: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.app.user ? state.entities.users[state.app.user] : null
  };
}

export default connect(mapStateToProps, { initialize })(App);
