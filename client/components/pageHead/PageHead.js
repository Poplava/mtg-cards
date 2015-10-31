import React, { Component, PropTypes } from 'react';

import './PageHead.less';

class PageHead extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="PageHead__root">
        {
          children ?
            <div className="PageHead__title">{children}</div> : null
        }
      </div>
    );
  }
}

PageHead.propTypes = {
  children: PropTypes.node
};

PageHead.defaultProps = {
  children: null
};

export default PageHead;
