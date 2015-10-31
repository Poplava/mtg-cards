import React, { Component, PropTypes } from 'react';

import './CardList.less';

import CardPanel from '../cardPanel/CardPanel';

class CardList extends Component {
  render() {
    const { cards, onSubmitGame } = this.props;

    return (
      <div className="CardList__root">
        {
          cards.map(card => (
            <CardPanel
              key={card._id}
              card={card}
              >
              <div className="CardList__actions">
                <div><span>{'In game: ' + card.gameTotal}</span></div>
                {
                  onSubmitGame ?
                    <button onClick={() => onSubmitGame(card, card.gameTotal + 1)}>Add to game</button> : null
                }
              </div>
            </CardPanel>
          ))
        }
      </div>
    );
  }
}

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
  onSubmitGame: PropTypes.func
};

CardList.defaultProps = {};

export default CardList;
