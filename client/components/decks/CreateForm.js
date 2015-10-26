import React, { Component, PropTypes } from 'react';

import FormGroup from '../common/FormGroup';
import Field from '../common/Field';
import Panel from '../common/Panel';

class CreateForm extends Component {
  handleSubmit(key, event) {
    //this.props.onChange(key, event.target.value);
  }

  handleChange(key, event) {
    this.props.formChange(key, event.target.value);
  }

  render() {
    const { form, formSubmit } = this.props;

    return (
      <Panel>
        <FormGroup label="Title">
          <Field
            value={form.title}
            onChange={event => this.handleChange('title', event)}
            placeholder="Enter a Deck Title"
            />
        </FormGroup>
        <button onClick={() => formSubmit(form.title)} className="btn btn-default" type="button" disabled={!form.title}>Create a Deck</button>
      </Panel>
    );
  }
}

CreateForm.propTypes = {
  form: PropTypes.object.isRequired,
  formChange: PropTypes.func.isRequired,
  formSubmit: PropTypes.func.isRequired
};

CreateForm.defaultProps = {};

export default CreateForm;
