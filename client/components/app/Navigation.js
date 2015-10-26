import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import './less/navigation.less';

class Navigation extends Component {
  render() {
    const { user } = this.props;

    return (
      <nav className="navbar navbar-default Nav__bar">
        <div className="container-fluid">
          <div className="navbar-header">
            <IndexLink to="/" className="navbar-brand">MTG Cards Game</IndexLink>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/cards" activeClassName="active">All cards</Link></li>
              <li><Link to="/decks" activeClassName="active">My decks</Link></li>
            </ul>
            <p className="navbar-text navbar-right">Signed in as <strong>{user.displayName}</strong></p>
          </div>
        </div>
      </nav>
    );
  }
}

Navigation.propTypes = {
  user: PropTypes.object.isRequired
};

export default Navigation;
