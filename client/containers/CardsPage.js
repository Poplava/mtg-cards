import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class CardsPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          Cards
        </div>
      </div>
    );
  }
}

CardsPage.propTypes = {
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(CardsPage);
