import React, { Component, PropTypes } from 'react';

import './CardPanel.less';

import CardName from './CardName';

class CardPanel extends Component {
  render() {
    const { card } = this.props;

    return (
      <div className="CardPanel__root">
        <div className="CardPanel__pictureWrap">
          <img className="CardPanel__picture" src={`http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${card.multiverseid}&type=card`} />
        </div>
        <CardName {...card} />
      </div>
    );
  }
}

CardPanel.propTypes = {
  card: PropTypes.object.isRequired
};

export default CardPanel;
