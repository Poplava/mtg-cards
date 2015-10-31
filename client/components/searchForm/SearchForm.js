import React, { Component, PropTypes } from 'react';

import './SearchForm.less';

class SearchForm extends Component {
  render() {
    return (
      <div className="SearchForm__root">
        <div className="SearchForm__field">
          <input type="text" placeholder="Enter a name" />
        </div>
        <div className="SearchForm__field">
          <label>
            <input type="checkbox" />
            Enchantment
          </label>
        </div>
        <div className="SearchForm__field">
          <button>Search</button>
        </div>
      </div>
    );
  }
}

SearchForm.propTypes = {};

SearchForm.defaultProps = {};

export default SearchForm;
