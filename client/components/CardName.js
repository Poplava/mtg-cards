import React, { Component, PropTypes } from 'react';

class CardName extends Component {
  getName() {
    let name = this.props.name;

    this.props.foreignNames.forEach(foreignName => {
      if (foreignName.language === 'Russian') {
        name = foreignName.name;
      }
    });

    return name;
  }

  render() {
    return (
      <div className="CardPanel__name">{this.getName()}</div>
    );
  }
}

CardName.propTypes = {
  name: PropTypes.string.isRequired,
  foreignNames: PropTypes.array
};

CardName.defaultProps = {
  foreignNames: []
};

export default CardName;
