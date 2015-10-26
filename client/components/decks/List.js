import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router';

import Panel from '../common/Panel';

class List extends Component {
  render() {
    const { decks, total } = this.props;

    return (
      <div className="list-group">
        {
          decks.map(deck => (
            <div key={deck._id} className="list-group-item">
              <Link to={`/decks/${deck._id}`}>{deck.title}</Link>
              {' '}
              <span className="pull-right text-muted">Created on: {(new Date(deck.addedOn)).toLocaleDateString()}</span>
            </div>
          ))
        }
      </div>
    );
  }
}

List.propTypes = {
  decks: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired
};

List.defaultProps = {};

export default List;
