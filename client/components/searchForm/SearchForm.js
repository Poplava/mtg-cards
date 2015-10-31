import React, { Component, PropTypes } from 'react';

import { CARD_TYPES, CARD_CMC, CARD_COLORS } from '../../../shared/Constants';

import './SearchForm.less';

class SearchForm extends Component {
  render() {
    const { params, total, onChangeText, onChangeCheckbox, onSubmit } = this.props;

    return (
      <div className="SearchForm__root">
        <div className="SearchForm__fieldGroup">
          <div className="SearchForm__field">
            <input
              type="text"
              placeholder="Enter a name"
              value={params.name}
              onChange={event => onChangeText('name', event.target.value)}
              />
          </div>
        </div>
        <div className="SearchForm__fieldGroup">
          {
            CARD_TYPES.map(type => (
              <div key={type} className="SearchForm__field">
                <label>
                  <input
                    type="checkbox"
                    onChange={event => onChangeCheckbox('types', type, event.target.checked)}
                    checked={params.types.indexOf(type) >= 0}
                    />
                  {type}
                </label>
              </div>
            ))
          }
        </div>
        <div className="SearchForm__fieldGroup">
          {
            CARD_CMC.map(cmc => (
              <div key={cmc} className="SearchForm__field">
                <label>
                  <input
                    type="checkbox"
                    onChange={event => onChangeCheckbox('cmc', cmc, event.target.checked)}
                    checked={params.cmc.indexOf(cmc) >= 0}
                    />
                  {cmc}
                </label>
              </div>
            ))
          }
        </div>
        <div className="SearchForm__fieldGroup">
          {
            CARD_COLORS.map(color => (
              <div key={color} className="SearchForm__field">
                <label>
                  <input
                    type="checkbox"
                    onChange={event => onChangeCheckbox('colors', color, event.target.checked)}
                    checked={params.colors.indexOf(color) >= 0}
                    />
                  {color}
                </label>
              </div>
            ))
          }
        </div>
        <div className="SearchForm__fieldGroup">
          <div className="SearchForm__field">
            <button onClick={event => onSubmit(params)}>Search</button>
          </div>
        </div>
        <div className="SearchForm__fieldGroup">
          <div className="SearchForm__field">
            {'Total found: ' + total}
          </div>
        </div>
      </div>
    );
  }
}

SearchForm.propTypes = {
  params: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onChangeCheckbox: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SearchForm;
