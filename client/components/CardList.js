import React, { Component, PropTypes } from 'react';

import styles from 'css/CardList.less';

import CardPicture from 'CardPicture';
import CardName from 'CardName';

class CardList extends Component {
  render() {
    const { cards, onSubmitGame } = this.props;

    return (
      <div className={styles.root}>
        {
          cards.map(card => (
            <div className={styles.listItem} key={card._id}>
              <div className={styles.wrap}>
                <CardPicture
                  {...card}
                  />
              </div>

              <div className={styles.wrap}>
                <CardName
                  {...card}
                  />
                <div>{'In game: ' + card.gameTotal}</div>
                <div>{'Set: ' + card.setCode}</div>
                {
                  onSubmitGame ?
                    <button onClick={() => onSubmitGame(card, card.gameTotal + 1)}>Add to game</button> : null
                }
              </div>
            </div>
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

export default CardList;
