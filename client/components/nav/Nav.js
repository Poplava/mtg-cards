import React, { Component, PropTypes } from 'react';

import './Nav.less';

import { Link } from 'react-router';

class Nav extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className="Nav__root">
        <div className="Nav__logo">
          <Link to="/" className="Nav__logoLink" />
        </div>
        <div className="Nav__list">
          <Link to="/cards" className="Nav__listItem">Cards</Link>
          <Link to="/decks" className="Nav__listItem">Decks</Link>
        </div>
        <div className="Nav__user">
          {user.displayName}
        </div>
      </div>
    );
  }
}

Nav.propTypes = {
  user: PropTypes.object.isRequired
};

export default Nav;
