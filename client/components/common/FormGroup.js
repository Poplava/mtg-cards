import React, { Component, PropTypes } from 'react';

class FormGroup extends Component {
  render() {
    const { label, children } = this.props;

    return (
      <div className="form-group">
        {
          label ?
            <label>{label}</label> : null
        }
        {children}
      </div>
    );
  }
}

FormGroup.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node
};


FormGroup.defaultProps = {
  label: null
};

export default FormGroup;
