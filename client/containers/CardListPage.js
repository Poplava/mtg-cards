import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class CardListPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        CARDS
      </div>
    );
  }
}

CardListPage.propTypes = {};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(CardListPage);
