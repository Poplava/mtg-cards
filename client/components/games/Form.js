import React, { Component, PropTypes } from 'react';

import FormGroup from '../common/FormGroup';
import Checkbox from '../common/Checkbox';
import Field from '../common/Field';

class Form extends Component {
  render() {
    const { params, formChange, formSubmit } = this.props;

    return (
      <div>
        <FormGroup label="Name">
          <Field
            value={params.name}
            onChange={event => formChange('name', event.target.value)}
            placeholder="Name"
            />
        </FormGroup>
        <button onClick={() => formSubmit()} className="btn btn-default" type="button">Search</button>
      </div>
    );
  }
}

Form.propTypes = {
  params: PropTypes.object.isRequired,
  formChange: PropTypes.func.isRequired,
  formSubmit: PropTypes.func.isRequired
};

export default Form;
