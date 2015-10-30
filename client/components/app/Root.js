import React, { Component, PropTypes } from 'react';

import './App.less';

import Auth from '../auth/Auth';

class Root extends Component {
  render() {
    const { user, children } = this.props;

    if (!user) {
      return (
        <div className="App__root">
          <Auth />
        </div>
      );
    }

    return (
      <div className="App__root">
        <div className="App__nav">Nav</div>
        <div className="App__main">
          Main
          {children}
        </div>
      </div>
    );
  }
}

Root.propTypes = {
  children: PropTypes.node,
  user: PropTypes.object
};

Root.defaultProps = {
  user: null
};

export default Root;
