import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class ViewPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Deck View: #{this.props.params.id}</h1>
          </div>
        </div>
      </div>
    );
  }
}

ViewPage.propTypes = {
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(ViewPage);
