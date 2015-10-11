import React, { Component, PropTypes } from 'react';

import Navigation from './Navigation';
import Auth from './Auth';

class Layout extends Component {
  render() {
    const { user, children } = this.props;

    if (!user) {
      return <Auth />;
    }

    return (
      <div>
        <Navigation />
        <div>{children}</div>
      </div>
    );
  }
}

Layout.propTypes = {
  user: PropTypes.object,
  children: PropTypes.node
};

Layout.defaultProps = {
  user: null
};

export default Layout;
