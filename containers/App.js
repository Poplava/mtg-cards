import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>App</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);
