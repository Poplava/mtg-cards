import React, { Component, PropTypes } from 'react';

import './less/card.less';

import CardPicture from './CardPicture';
import CardName from './CardName';

class Card extends Component {
  render() {
    const { card, onItemAdd } = this.props;

    return (
      <div className="card card_search clearfix">
        <CardPicture {...card} />
        <div className="card__content">
          <div className="card__name"><CardName {...card} /></div>
          <div className="card__actions text-right">
            <span>In game: {card.games.length} </span>
            {
              onItemAdd ?
                <button onClick={onItemAdd} className="btn btn-default">Add to game</button> : null
            }
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  onItemAdd: PropTypes.func
};

Card.defaultProps = {
};

export default Card;
