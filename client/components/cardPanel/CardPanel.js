import React, { Component, PropTypes } from 'react';

import './CardPanel.less';

import CardName from './CardName';
import CardPicture from './CardPicture';

class CardPanel extends Component {
  render() {
    const { card, children } = this.props;

    return (
      <div className="CardPanel__root">
        <CardPicture {...card} />
        <CardName {...card} />
        {children ? children : null}
      </div>
    );
  }
}

CardPanel.propTypes = {
  children: PropTypes.node,
  card: PropTypes.object.isRequired
};

export default CardPanel;
