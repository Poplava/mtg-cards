import React, { Component, PropTypes } from 'react';

import { CARD_TYPES, CARD_CMC, CARD_COLORS } from '../../shared/Constants';

import styles from 'css/CardSearchBox.less';

class CardSearchBox extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.box}>
          <div>
            <input
              type="text"
              placeholder="Enter a name"
              />
            <br/>
            <button>Search</button>
            <br/>
            {'Total found: ' + 0}
          </div>
          <div>
            <div>Types:</div>
            {
              CARD_TYPES.map(type => (
                <div key={type}>
                  <label>
                    <input
                      type="checkbox"
                      />
                    {type}
                  </label>
                </div>
              ))
            }
          </div>
          <div>
            <div>Colors:</div>
            {
              CARD_COLORS.map(color => (
                <div key={color}>
                  <label>
                    <input
                      type="checkbox"
                      />
                    {color}
                  </label>
                </div>
              ))
            }
          </div>
          <div>
            <div>Mana cost:</div>
            {
              CARD_CMC.map(cmc => (
                <div key={cmc}>
                  <label>
                    <input
                      type="checkbox"
                      />
                    {cmc}
                  </label>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

CardSearchBox.propTypes = {};

CardSearchBox.defaultProps = {};

export default CardSearchBox;
