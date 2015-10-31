import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class CardPicture extends Component {
  constructor() {
    super(...arguments);

    this.state = { origin: false };
    this.toggleOrigin = this.toggleOrigin.bind(this);
  }

  toggleOrigin() {
    this.setState({
      origin: !this.state.origin
    });
  }

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
      <div className="CardPanel__pictureWrap" onClick={this.toggleOrigin}>
        <img
          className="CardPanel__picture"
          src={`http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${showMultiverseid}&type=card`}
          />
        {
          originMultiverseid ?
            <img
              className={classNames('CardPanel__picture CardPanel__pictureOrigin', { CardPanel__pictureZoom: this.state.origin })}
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
