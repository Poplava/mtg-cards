import React, { Component, PropTypes } from 'react';

import Progress from '../common/Progress';
import Card from './Card';

class List extends Component {
  render() {
    const { status, cards, moreExists, formMore, itemAdd } = this.props;

    return (
      <div>
        {
          cards.map(item => (
            <Card
              key={item.card._id}
              card={item.card}
              status={item.status}
              itemAdd={() => itemAdd(item.card._id)}
              />
          ))
        }
        {
          status === 'success' && moreExists ?
            <div className="text-center">
              <button className="btn btn-default" onClick={formMore}>More</button>
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
  formMore: PropTypes.func.isRequired,
  itemAdd: PropTypes.func
};

export default List;
