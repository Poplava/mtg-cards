import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { userSelector, userIsUserSelector } from '../selectors/UserSelectors';

import { initialize } from '../actions/AppActions';

import 'css/Root.css';
import styles from 'css/Shell.css';

import Navigation from 'Navigation';

class Shell extends Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    const { children, user, isUser } = this.props;

    if (!user) {
      return (
        <a href="/auth/google">Connect with Google</a>
      );
    }

    if (!isUser) {
      return (
        <span>You don't have rights to access this service.</span>
      );
    }

    return (
      <section className={styles.root}>
        <nav className={styles.nav}>
          <Navigation
            user={user}
            />
        </nav>
        <main className={styles.content}>
          {children}
        </main>
      </section>
    );
  }
}

Shell.propTypes = {
  children: PropTypes.node,
  user: PropTypes.object,
  isUser: PropTypes.bool.isRequired,

  initialize: PropTypes.func.isRequired
};

Shell.defaultProps = {
  user: null
};

function mapStateToProps(state) {
  return {
    user: userSelector(state),
    isUser: userIsUserSelector(state)
  };
}

export default connect(mapStateToProps, { initialize })(Shell);
