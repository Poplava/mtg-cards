import React, { Component, PropTypes } from 'react';

import FormGroup from '../common/FormGroup';
import Checkbox from '../common/Checkbox';
import Field from '../common/Field';


class Form extends Component {
  constructor() {
    super(...arguments);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    this.props.onSubmit(this.props.params);
  }

  handleChange(key, event) {
    this.props.onChange(key, event.target.value);
  }

  render() {
    const { params } = this.props;

    return (
      <div>
        <FormGroup label="Name">
          <Field
            value={params.name}
            onChange={event => this.handleChange('name', event)}
            placeholder="Name"
            />
        </FormGroup>
        <button onClick={this.handleSubmit} className="btn btn-default" type="button">Search</button>
      </div>
    );
  }
}

Form.propTypes = {
  params: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

Form.defaultProps = {};

export default Form;
