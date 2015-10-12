import React, { Component, PropTypes } from 'react';

import './less/card.less';

import CardPicture from './CardPicture';
import CardName from './CardName';

class Card extends Component {
  render() {
    return (
      <div className="card card_search clearfix">
        <CardPicture {...this.props} />
        <div className="card__content">
          <CardName {...this.props} />
        </div>
      </div>
    );
  }
}

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
