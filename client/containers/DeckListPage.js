import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import PageHead from '../components/pageHead/PageHead';

class DeckListPage extends Component {
  render() {
    return (
      <PageHead>Decks</PageHead>
    );
  }
}

DeckListPage.propTypes = {};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(DeckListPage);
