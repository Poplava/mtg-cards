import React, { Component, PropTypes } from 'react';

import Progress from '../common/Progress';
import Card from './Card';

class List extends Component {
  render() {
    const { status, cards, moreExists, onMore } = this.props;

    return (
      <div>
        {
          cards.map(card => <Card key={card._id} {...card} />)
        }
        {
          status === 'success' && moreExists ?
            <div className="text-center">
              <button className="btn btn-default" onClick={onMore}>More</button>
            </div> : null
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
  cards: PropTypes.array.isRequired,
  moreExists: PropTypes.bool.isRequired,
  onMore: PropTypes.func.isRequired
};

export default List;
