import React, { Component, PropTypes } from 'react';

import styles from 'css/Navigation.less';

class Navigation extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.brand}></div>
        <div className={styles.user}>
          {
            user.photo ?
              <div className={styles.userPicture}>
                <img src={user.photo} alt={user.displayName} />
              </div> : null
          }
          <div className={styles.userName}>{user.displayName}</div>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  user: PropTypes.object.isRequired
};

export default Navigation;
