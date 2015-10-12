import React, { Component, PropTypes } from 'react';

class CardPicture extends Component {
  getMultiverseid() {
    let multiverseid = this.props.multiverseid;

    this.props.foreignNames.forEach(foreignName => {
      if (foreignName.language === 'Russian') {
        multiverseid = foreignName.multiverseid;
      }
    });

    return multiverseid;
  }

  render() {
    return (
      <div className="card__picture">
        <img src={`http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${this.getMultiverseid()}&type=card`} />
      </div>
    );
  }
}

CardPicture.propTypes = {
  multiverseid: PropTypes.number.isRequired,
  foreignNames: PropTypes.array
};

CardPicture.defaultProps = {
  foreignNames: []
};

export default CardPicture;
