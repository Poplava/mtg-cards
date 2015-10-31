import React, { Component, PropTypes } from 'react';

import './CardList.less';

import CardPanel from '../cardPanel/CardPanel';

class CardList extends Component {
  render() {
    const { cards } = this.props;

    return (
      <div className="CardList__root">
        {
          cards.map(card => (
            <CardPanel
              key={card._id}
              card={card}
              />
          ))
        }
      </div>
    );
  }
}

CardList.propTypes = {
  cards: PropTypes.array.isRequired
};

CardList.defaultProps = {};

export default CardList;
