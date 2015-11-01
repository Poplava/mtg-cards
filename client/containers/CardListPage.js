import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { userIsAdminSelector } from '../selectors/UserSelectors';
import { cardListSelector } from '../selectors/CardSelectors';

import { changeText, changeCheckbox, submit, submitGame } from '../actions/CardListActions';

import CardSearchBox from 'CardSearchBox';
import CardList from 'CardList';
import Loader from 'Loader';

class CardListPage extends Component {
  render() {
    const {
      params,
      total,
      status,
      isAdmin,
      cards,
      changeText,
      changeCheckbox,
      submit,
      submitGame
      } = this.props;

    return (
      <div>
        <CardSearchBox
          params={params}
          total={total}
          onChangeText={changeText}
          onChangeCheckbox={changeCheckbox}
          onSubmit={submit}
          />
        <CardList
          cards={cards}
          onSubmitGame={isAdmin ? submitGame : null}
          />
        {
          status === 'request' ?
            <Loader /> : null
        }
      </div>
    );
  }
}

CardListPage.propTypes = {
  params: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  cards: PropTypes.array.isRequired,

  changeText: PropTypes.func.isRequired,
  changeCheckbox: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  submitGame: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { params, total, status } = state.cardList;

  return {
    params,
    total,
    status,
    isAdmin: userIsAdminSelector(state),
    cards: cardListSelector(state)
  };
}

export default connect(mapStateToProps, {
  changeText,
  changeCheckbox,
  submit,
  submitGame
})(CardListPage);
