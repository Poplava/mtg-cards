import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

import { formSubmit, formChange, formSetParams } from '../actions/CardsActions';

import Form from '../components/cards/Form';

class CardsPage extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidMount() {
    this.props.formSetParams(this.props.query);
  }

  render() {
    const { form, formSubmit, formChange } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Form
              params={form.params}
              onSubmit={formSubmit}
              onChange={formChange}
              />
          </div>
        </div>
      </div>
    );
  }
}

CardsPage.propTypes = {
  form: PropTypes.object.isRequired,
  query: PropTypes.object.isRequired,
  pushState: PropTypes.func.isRequired,
  formSubmit: PropTypes.func.isRequired,
  formChange: PropTypes.func.isRequired,
  formSetParams: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    form: state.cards.form,
    query: state.router.location.query
  };
}

export default connect(mapStateToProps, {
  pushState,
  formSubmit,
  formChange,
  formSetParams
})(CardsPage);
