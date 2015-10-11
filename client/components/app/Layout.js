import React, { Component, PropTypes } from 'react';

import Navigation from './Navigation';
import Auth from './Auth';
import NoAccess from './NoAccess';

class Layout extends Component {
  render() {
    const { user, children } = this.props;

    if (!user) {
      return <Auth />;
    }

    if (user.role === 'guest') {
      return <NoAccess />;
    }

    return (
      <div>
        <Navigation user={user} />
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
