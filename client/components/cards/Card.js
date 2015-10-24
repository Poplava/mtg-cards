import React, { Component, PropTypes } from 'react';

import './less/card.less';

import CardPicture from './CardPicture';
import CardName from './CardName';

class Card extends Component {
  render() {
    const { card, itemAdd } = this.props;

    return (
      <div className="card card_search clearfix">
        <CardPicture {...card} />
        <div className="card__content">
          <div className="card__name"><CardName {...card} /></div>
          <div className="card__actions text-right">
            <span>Total in game: <span className="badge">{card.game ? card.game.total : 0}</span> </span>
            {
              itemAdd ?
                <button onClick={itemAdd} className="btn btn-default">Add to game</button> : null
            }
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  itemAdd: PropTypes.func
};

Card.defaultProps = {
};

export default Card;
