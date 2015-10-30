import { getEntitiesFromInitialState } from '../utils/APIUtils';

export const APP__INITIALIZE = 'APP__INITIALIZE';

function _initialize(response) {
  return {
    type: APP__INITIALIZE,
    response
  };
}

export function initialize() {
  return _initialize(getEntitiesFromInitialState());
}
