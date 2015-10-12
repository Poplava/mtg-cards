import React, { Component, PropTypes } from 'react';

class Field extends Component {
  render() {
    return (
      <input
        ref="control"
        className="form-control"
        {...this.props}
        />
    );
  }
}

Field.propTypes = {
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string
};


Field.defaultProps = {
  defaultValue: '',
  placeholder: '',
  type: 'text'
};

export default Field;
