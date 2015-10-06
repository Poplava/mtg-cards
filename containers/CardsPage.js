import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { formChange, setQuery, requestCards } from '../actions/CardsActions';

import Form from '../components/cards/Form';
import List from '../components/cards/List';
import '../components/cards/cards.less';

class CardsPage extends Component {
  constructor() {
    super(...arguments);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit() {
    const { form, setQuery, requestCards } = this.props;
    setQuery(form.params);
    requestCards();
  }

  render() {
    const { form, list, formChange } = this.props;

    return (
      <div className="row">
        <div className="col-md-3">
          <Form
            onChange={formChange}
            onSubmit={this.handleFormSubmit}
            params={form.params}
            />
        </div>
        <div className="col-md-9">
          <List
            {...list}
            />
        </div>
      </div>
    );
  }
}

CardsPage.propTypes = {
  form: PropTypes.object.isRequired,
  formChange: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
  requestCards: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { form, list } = state.cards;

  return {
    form,
    list
  };
}

export default connect(mapStateToProps, {
  formChange,
  setQuery,
  requestCards
})(CardsPage);
