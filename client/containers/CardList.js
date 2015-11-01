import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import CardSearchBox from 'CardSearchBox';
import Loader from 'Loader';

class CardList extends Component {
  render() {
    return (
      <div>
        <CardSearchBox />
        <Loader />
      </div>
    );
  }
}

CardList.propTypes = {

};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(CardList);
