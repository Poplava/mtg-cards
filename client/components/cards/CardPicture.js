import React, { Component, PropTypes } from 'react';

class CardPicture extends Component {
  getRuMultiverseid() {
    let multiverseid = null;

    this.props.foreignNames.forEach(foreignName => {
      if (foreignName.language === 'Russian') {
        multiverseid = foreignName.multiverseid;
      }
    });

    return multiverseid;
  }

  render() {
    const ruMultiverseid = this.getRuMultiverseid();
    const { multiverseid } = this.props;

    let showMultiverseid = ruMultiverseid || multiverseid;
    let originMultiverseid = ruMultiverseid ? multiverseid : null;

    return (
      <div className="card__picture">
        <img
          className="card__picture__img"
          src={`http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${showMultiverseid}&type=card`}
          />
        {
          originMultiverseid ?
            <img
              className="card__picture__img card__picture__img_origin"
              src={`http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${originMultiverseid}&type=card`}
              /> : null
        }
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
