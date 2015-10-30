import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { initialize } from '../actions/AppActions';

class App extends Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        {children}
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  initialize: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, { initialize })(App);
