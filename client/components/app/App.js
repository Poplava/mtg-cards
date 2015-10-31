import React, { Component, PropTypes } from 'react';

import './App.less';

import Auth from '../auth/Auth';
import Nav from '../nav/Nav';

class App extends Component {
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
        <div className="App__nav">
          <Nav
            user={user}
            />
        </div>
        <div className="App__main">
          {children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  user: PropTypes.object
};

App.defaultProps = {
  user: null
};

export default App;
