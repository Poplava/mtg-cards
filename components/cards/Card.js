import React, { Component, PropTypes } from 'react';

class Card extends Component {
  constructor() {
    super(...arguments);
    this.getForeign = this.getForeign.bind(this);
  }

  getForeign(lang) {
    const { name, multiverseid, foreignNames } = this.props;

    var foreign = {
      name,
      multiverseid
    };

    (foreignNames || []).forEach(foreignName => {
      if (foreignName.language === lang) {
        foreign = Object.assign({}, foreignName);
      }
    });

    return foreign;
  }

  render() {
    const { name, multiverseid } = this.getForeign('Russian');

    return (
      <li className="ip-cards__card">
          <h5>{name}</h5>
          <img src={`http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${multiverseid}&type=card`} />
      </li>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  multiverseid: PropTypes.number.isRequired,
  number: PropTypes.string.isRequired,
  setCode: PropTypes.string.isRequired,
  foreignNames: PropTypes.array
};

export default Card;
