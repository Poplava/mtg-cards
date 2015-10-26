import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';

import { listRequest, formChange, formSubmit } from '../actions/DecksActions';

import CreateForm from '../components/decks/CreateForm';

class DecksPage extends Component {
  componentDidMount() {
    this.props.listRequest();
  }

  render() {
    const { decks, form, formChange, formSubmit } = this.props;

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
            {
              decks.map(deck => (
                <div key={deck._id}>
                  <Link to={`/decks/${deck._id}`}><strong>{deck.title}</strong> [{(new Date(deck.addedOn)).toLocaleDateString()}]</Link>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

DecksPage.propTypes = {
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
})(DecksPage);
