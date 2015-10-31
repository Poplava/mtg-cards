import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { changeText, changeCheckbox, submit, more, submitGame } from '../actions/CardListActions';

import PageHead from '../components/pageHead/PageHead';
import SearchForm from '../components/searchForm/SearchForm';
import CardList from '../components/cardList/CardList';

class CardListPage extends Component {
  render() {
    const { userIsAdmin, params, total, skip, status, cards, changeText, changeCheckbox, submit, more, submitGame } = this.props;

    return (
      <div>
        <PageHead>Cards</PageHead>
        <SearchForm
          params={params}
          total={total}
          onChangeText={changeText}
          onChangeCheckbox={changeCheckbox}
          onSubmit={submit}
          />
        <CardList
          cards={cards}
          onSubmitGame={userIsAdmin ? submitGame : null}
          />
        {
          status === 'request' ?
            <div>Loading</div> : null
        }
        {
          status !== 'request' && skip < total ?
            <div><button onClick={more}>More</button><br /><br /></div> : null
        }
      </div>
    );
  }
}

CardListPage.propTypes = {
  userIsAdmin: PropTypes.bool.isRequired,
  params: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  changeText: PropTypes.func.isRequired,
  changeCheckbox: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  submitGame: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { params, total, status, skip, cards } = state.cardList;
  const cardsById = state.entities.cards;
  const usersById = state.entities.users;

  return {
    userIsAdmin: state.entities.users[state.app.user].roles.indexOf('admin') > -1,
    params,
    status,
    skip,
    total,
    cards: cards.map(card => cardsById[card])
  };
}

export default connect(mapStateToProps, {
  changeText,
  changeCheckbox,
  submit,
  more,
  submitGame
})(CardListPage);
