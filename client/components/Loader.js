import React, { Component, PropTypes } from 'react';

import styles from 'css/Loader.css';

class Loader extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.loader}></div>
      </div>
    );
  }
}

Loader.propTypes = {};

Loader.defaultProps = {};

export default Loader;
