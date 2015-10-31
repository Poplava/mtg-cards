import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import PageHead from '../components/pageHead/PageHead';
import SearchForm from '../components/searchForm/SearchForm';

class CardListPage extends Component {
  render() {
    return (
      <div>
        <PageHead>Cards</PageHead>
        <SearchForm />
      </div>

    );
  }
}

CardListPage.propTypes = {};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(CardListPage);
