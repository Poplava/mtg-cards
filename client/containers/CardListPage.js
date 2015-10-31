import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import PageHead from '../components/pageHead/PageHead';

class CardListPage extends Component {
  render() {
    return (
      <PageHead>Cards</PageHead>
    );
  }
}

CardListPage.propTypes = {};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(CardListPage);
