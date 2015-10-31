import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { changeText, changeCheckbox, submit } from '../actions/CardListActions';

import PageHead from '../components/pageHead/PageHead';
import SearchForm from '../components/searchForm/SearchForm';

class CardListPage extends Component {
  render() {
    const { cardListParams, changeText, changeCheckbox, submit } = this.props;

    return (
      <div>
        <PageHead>Cards</PageHead>
        <SearchForm
          params={cardListParams}
          onChangeText={changeText}
          onChangeCheckbox={changeCheckbox}
          onSubmit={submit}
          />
      </div>

    );
  }
}

CardListPage.propTypes = {
  changeText: PropTypes.func.isRequired,
  changeCheckbox: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    cardListParams: state.cardList.params
  };
}

export default connect(mapStateToProps, {
  changeText,
  changeCheckbox,
  submit
})(CardListPage);
