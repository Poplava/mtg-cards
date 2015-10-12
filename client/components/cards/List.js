import React, { Component, PropTypes } from 'react';

import Progress from '../common/Progress';

class List extends Component {
  render() {
    const { status, cards } = this.props;

    return (
      <div>
        {
          cards.map(card => <div>{card.name}</div>)
        }
        {
          status === 'request' ?
            <Progress /> : null
        }
      </div>
    );
  }
}

List.propTypes = {
  status: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired
};

export default List;
