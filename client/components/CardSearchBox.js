import React, { Component, PropTypes } from 'react';

import { CARD_TYPES, CARD_CMC, CARD_COLORS } from '../../shared/Constants';

import styles from 'css/CardSearchBox.less';

class CardSearchBox extends Component {
  render() {
    const { params, total, onChangeText, onChangeCheckbox, onSubmit } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.box}>
          <div>
            <input
              type="text"
              placeholder="Enter a name"
              value={params.name}
              onChange={event => onChangeText('name', event.target.value)}
              />
            <br/>
            <button onClick={event => onSubmit(params)}>Search</button>
            <br/>
            {'Total found: ' + total}
          </div>
          <div>
            <div>Types:</div>
            {
              CARD_TYPES.map(type => (
                <div key={type}>
                  <label>
                    <input
                      type="checkbox"
                      onChange={event => onChangeCheckbox('types', type, event.target.checked)}
                      checked={params.types.indexOf(type) >= 0}
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
                      onChange={event => onChangeCheckbox('colors', color, event.target.checked)}
                      checked={params.colors.indexOf(color) >= 0}
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
                      onChange={event => onChangeCheckbox('cmc', cmc, event.target.checked)}
                      checked={params.cmc.indexOf(cmc) >= 0}
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

CardSearchBox.propTypes = {
  params: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onChangeCheckbox: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default CardSearchBox;
