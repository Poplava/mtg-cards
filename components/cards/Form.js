import React, { Component, PropTypes } from 'react';

class Form extends Component {
  handleChange(key, event) {
    this.props.onChange(key, event.target.value);
  }

  render() {
    const { params, onSubmit } = this.props;

    return (
      <form>
        <div className="form-group">
          <label>Number</label>
          <input
            onChange={this.handleChange.bind(this, 'number')}
            value={params.number}
            className="form-control"
            type="text"
            placeholder="Number"
            />
        </div>
        <div className="form-group">
          <label>Set code</label>
          <input
            onChange={this.handleChange.bind(this, 'setCode')}
            value={params.setCode}
            className="form-control"
            type="text"
            placeholder="Set code"
            />
        </div>
        <button onClick={onSubmit} className="btn btn-default" type="button">Search</button>
      </form>
    );
  }
}

Form.propTypes = {
  params: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Form;
