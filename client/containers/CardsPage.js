import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

import { formSubmit, formChange, formSetParams, formMore, itemAdd } from '../actions/CardsActions';

import Form from '../components/cards/Form';
import List from '../components/cards/List';

class CardsPage extends Component {
  componentDidMount() {
    this.props.formSetParams(this.props.query);
  }

  render() {
    const { form, list, formSubmit, formChange, formMore, itemAdd } = this.props;

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
          <div className="col-md-9">
            <List
              {...list}
              moreExists={form.moreExists}
              formMore={formMore}
              itemAdd={itemAdd}
              />
          </div>
        </div>
      </div>
    );
  }
}

CardsPage.propTypes = {
  form: PropTypes.object.isRequired,
  list: PropTypes.object.isRequired,
  query: PropTypes.object.isRequired,
  pushState: PropTypes.func.isRequired,
  formSubmit: PropTypes.func.isRequired,
  formChange: PropTypes.func.isRequired,
  formSetParams: PropTypes.func.isRequired,
  formMore: PropTypes.func.isRequired,
  itemAdd: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    form: state.cards.form.toJS(),
    list: {
      status: state.cards.list.get('status'),
      cards: state.cards.list.get('cards').toList().toJS()
    },
    query: state.router.location.query
  };
}

export default connect(mapStateToProps, {
  pushState,
  formSubmit,
  formChange,
  formSetParams,
  formMore,
  itemAdd
})(CardsPage);
