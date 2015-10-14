import { combineReducers } from 'redux';

import form from './form';
import list from './list';

export default combineReducers({
  form,
  list
});
