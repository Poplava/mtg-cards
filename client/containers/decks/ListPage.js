import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';

import { listRequest, formChange, formSubmit } from '../../actions/DecksActions';

import CreateForm from '../../components/decks/CreateForm';
import List from '../../components/decks/List';

class ListPage extends Component {
  componentDidMount() {
    this.props.listRequest();
  }

  render() {
    const { decks, total, form, formChange, formSubmit } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <CreateForm
              form={form}
              formChange={formChange}
              formSubmit={formSubmit}
              />
          </div>
          <div className="col-md-9">
            <List
              decks={decks}
              total={total}
              />
          </div>
        </div>
      </div>
    );
  }
}

ListPage.propTypes = {
  decks: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  form: PropTypes.object.isRequired,
  listRequest: PropTypes.func.isRequired,
  formChange: PropTypes.func.isRequired,
  formSubmit: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    decks: state.decks.list.get('decks').toList().toJS(),
    total: state.decks.list.get('total'),
    form: state.decks.form.toJS()
  };
}

export default connect(mapStateToProps, {
  listRequest,
  formChange,
  formSubmit
})(ListPage);
