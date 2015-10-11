import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class GamePage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          GamePage
        </div>
      </div>
    );
  }
}

GamePage.propTypes = {
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(GamePage);
