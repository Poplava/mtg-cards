import React, { Component, PropTypes } from 'react';

class Form extends Component {
  handleChange(key, event) {
    this.props.onChange(key, event.target.value);
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label>Number</label>
          <input
            onChange={this.handleChange.bind(this, 'number')}
            className="form-control"
            type="text"
            placeholder="Number"
            />
        </div>
        <div className="form-group">
          <label>Set code</label>
          <input
            onChange={this.handleChange.bind(this, 'setCode')}
            className="form-control"
            type="text"
            placeholder="Set code"
            />
        </div>
        <button className="btn btn-default" type="button">Search</button>
      </form>
    );
  }
}

Form.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Form;
