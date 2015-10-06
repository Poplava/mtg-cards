import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <h1>App</h1>
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);
