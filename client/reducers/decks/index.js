import { combineReducers } from 'redux';

import list from './list';
import form from './form';
import view from './view';

export default combineReducers({
  list,
  form,
  view
});
