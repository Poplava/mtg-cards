import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { formChange } from '../actions/CardsActions';

import Form from '../components/cards/Form';
import List from '../components/cards/List';

class CardsPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <Form
            onChange={this.props.formChange}
            />
        </div>
        <div className="col-md-9">
          <List />
        </div>
      </div>
    );
  }
}

CardsPage.propTypes = {
  formChange: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {
  formChange
})(CardsPage);
