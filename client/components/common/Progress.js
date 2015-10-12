import React, { Component } from 'react';

class Progress extends Component {
  render() {
    return (
      <div className="progress">
        <div className="progress-bar progress-bar-striped active" style={{width: '100%'}}></div>
      </div>
    );
  }
}

export default Progress;
