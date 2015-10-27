import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { viewRequest } from '../../actions/DecksActions';

class ViewPage extends Component {
  componentDidMount() {
    this.props.viewRequest(this.props.params.id);
  }

  render() {
    const { deck, params } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Deck View: #{params.id}</h1>
            <pre>{JSON.stringify(deck, null, 2)}</pre>
          </div>
        </div>
      </div>
    );
  }
}

ViewPage.propTypes = {
  deck: PropTypes.object,
  viewRequest: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { view } = state.decks;

  const deck = view.get('deck');

  return {
    deck: deck && deck.toJS()
  };
}

export default connect(mapStateToProps, { viewRequest })(ViewPage);
