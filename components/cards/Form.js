import React, { Component, PropTypes } from 'react';

import FormGroup from '../forms/FormGroup';
import Checkbox from '../forms/Checkbox';
import Field from '../forms/Field';

class Form extends Component {
  handleChange(key, event) {
    this.props.onChange(key, event.target.value);
  }

  handleChangeColor(color, event) {
    this.props.onChangeColor(color, event.target.checked);
  }

  render() {
    const { params, onSubmit } = this.props;

    return (
      <form>
        <FormGroup label="Name">
          <Field
            onChange={this.handleChange.bind(this, 'name')}
            value={params.name}
            placeholder="Name"
            />
        </FormGroup>
        <FormGroup label="Color">
          <Checkbox
            onChange={this.handleChangeColor.bind(this, 'w')}
            checked={params.colors.indexOf('w') > -1}
            label="White"
            />
          <Checkbox
            onChange={this.handleChangeColor.bind(this, 'u')}
            checked={params.colors.indexOf('u') > -1}
            label="Blue"
            />
          <Checkbox
            onChange={this.handleChangeColor.bind(this, 'b')}
            checked={params.colors.indexOf('b') > -1}
            label="Black"
            />
          <Checkbox
            onChange={this.handleChangeColor.bind(this, 'r')}
            checked={params.colors.indexOf('r') > -1}
            label="Red"
            />
          <Checkbox
            onChange={this.handleChangeColor.bind(this, 'g')}
            checked={params.colors.indexOf('g') > -1}
            label="Green"
            />
        </FormGroup>
        <FormGroup label="Number">
          <Field
            onChange={this.handleChange.bind(this, 'number')}
            value={params.number}
            placeholder="Number"
            />
        </FormGroup>
        <FormGroup label="Set code">
          <Field
            onChange={this.handleChange.bind(this, 'setCode')}
            value={params.setCode}
            placeholder="Set code"
            />
        </FormGroup>
        <button onClick={onSubmit} className="btn btn-default" type="button">Search</button>
      </form>
    );
  }
}

Form.propTypes = {
  params: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeColor: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Form;
