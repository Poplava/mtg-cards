import React, { Component, PropTypes } from 'react';

class Checkbox extends Component {
  render() {
    const { onChange, checked, label } = this.props;

    return (
      <div className="checkbox">
        <label>
          <input onChange={onChange} checked={checked} type="checkbox" /> {label}
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string
};


Checkbox.defaultProps = {
  label: ''
};

export default Checkbox;
