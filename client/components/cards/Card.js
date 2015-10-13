import React, { Component, PropTypes } from 'react';

import './less/card.less';

import CardPicture from './CardPicture';
import CardName from './CardName';

class Card extends Component {
  render() {
    const { card, addToGame } = this.props;

    return (
      <div className="card card_search clearfix">
        <CardPicture {...card} />
        <div className="card__content">
          <div className="card__name"><CardName {...card} /></div>
          <div className="card__actions text-right">
            {
              addToGame ?
                <button onClick={addToGame} className="btn btn-default">Use</button> : null
            }
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  addToGame: PropTypes.func
};

Card.defaultProps = {
};

export default Card;
