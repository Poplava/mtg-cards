import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class MyPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          MyPage
        </div>
      </div>
    );
  }
}

MyPage.propTypes = {
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(MyPage);
