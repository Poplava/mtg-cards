import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class CardList extends Component {
  render() {
    return (
      <div>
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
