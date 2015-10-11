import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
  render() {
    return (
      <div>
        <Link to="/all">All</Link>
        <Link to="/game">In Game</Link>
        <Link to="/my">My</Link>
      </div>
    );
  }
}

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
