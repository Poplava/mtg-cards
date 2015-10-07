import React, { Component, PropTypes } from 'react';

import Card from './Card';

class List extends Component {
  render() {
    console.log(this.props);
    const { status, cards, total } = this.props;

    return (
      <div className="ip-cards">
        {
          total ?
            <div className="ip-cards__total">
              Total: <b>{total}</b>
            </div> : null
        }
        <ul className="ip-cards__list">
          {
            cards.map(card => (
              <Card key={card.id} {...card} />
            ))
          }
        </ul>
      </div>
    );
  }
}

List.propTypes = {
  status: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired
};

export default List;
