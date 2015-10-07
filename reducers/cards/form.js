import * as types from '../../constants/cards/ActionTypes';

const initialState = {
  params: {
    name: '',
    colors: [],
    number: '',
    setCode: ''
  }
};

export default function app(state = initialState, action = {}) {
  let colors;

  switch (action.type) {
    case types.CARDS_FORM_CHANGE:
      return Object.assign({}, state, {
        params: Object.assign({}, state.params, {
          [action.key]: action.value
        })
      });

    case types.CARDS_FORM_CHANGE_COLOR:
      colors = state.params.colors.filter(color => color !== action.color);

      if (action.checked) {
        colors = [action.color, ...colors];
      }
      return Object.assign({}, state, {
        params: Object.assign({}, state.params, {
          colors
        })
      });

    default:
      return state;
  }
};
