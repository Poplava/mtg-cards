import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Form from '../components/games/Form';
import List from '../components/cards/List';

import {
  formChange,
  formSetParams,
  formSubmit,
  formMore
} from '../actions/GamesActions';

class GamePage extends Component {
  componentDidMount() {
    this.props.formSetParams(this.props.query);
  }

  render() {
    const { form, list, formSubmit, formChange, formMore } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Form
              params={form.params}
              formSubmit={formSubmit}
              formChange={formChange}
              />
          </div>
          <div className="col-md-9">
            <List
              status={list.status}
              cards={list.items.map(item => item.item)}
              moreExists={form.moreExists}
              formMore={formMore}
              />
          </div>
        </div>
      </div>
    );
  }
}

GamePage.propTypes = {
  form: PropTypes.object.isRequired,
  list: PropTypes.object.isRequired,
  query: PropTypes.object.isRequired,
  formSubmit: PropTypes.func.isRequired,
  formChange: PropTypes.func.isRequired,
  formSetParams: PropTypes.func.isRequired,
  formMore: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { games } = state;

  return {
    form: games.form.toJS(),
    list: {
      status: games.list.get('status'),
      items: games.list.get('items').toList().toJS()
    },
    query: state.router.location.query
  };
}

export default connect(mapStateToProps, {
  formChange,
  formSetParams,
  formSubmit,
  formMore
})(GamePage);
