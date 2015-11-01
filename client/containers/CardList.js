import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { changeText, changeCheckbox, submit } from '../actions/CardListActions';

import CardSearchBox from 'CardSearchBox';
import Loader from 'Loader';

class CardList extends Component {
  render() {
    const {
      params,
      total,
      status,
      changeText,
      changeCheckbox,
      submit
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
        {
          status === 'request' ?
            <Loader /> : null
        }
      </div>
    );
  }
}

CardList.propTypes = {
  params: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  changeText: PropTypes.func.isRequired,
  changeCheckbox: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { params, total, status } = state.cardList;

  return {
    params,
    total,
    status
  };
}

export default connect(mapStateToProps, {
  changeText,
  changeCheckbox,
  submit
})(CardList);
