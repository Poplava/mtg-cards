import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

class Navigation extends Component {
  render() {
    const { user } = this.props;

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <IndexLink to="/" className="navbar-brand">MTG Cards Game</IndexLink>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/cards" activeClassName="active">All cards</Link></li>
              <li><Link to="/games" activeClassName="active">In game cards</Link></li>
              <li><Link to="/my" activeClassName="active">My cards</Link></li>
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
