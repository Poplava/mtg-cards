import React, { Component, PropTypes } from 'react';

class Field extends Component {
  render() {
    return (
      <input
        className="form-control"
        {...this.props}
        />
    );
  }
}

Field.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
};


Field.defaultProps = {
  placeholder: '',
  type: 'text'
};

export default Field;
