import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import { Iterable } from 'immutable';
import createHistory from 'history/lib/createBrowserHistory';
import routes from '../routes';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  reduxReactRouter({ routes, createHistory }),
  applyMiddleware(createLogger({
    collapsed: () => true,
    duration: true,

    transformer: (state) => {
      var newState = {};

      Object.keys(state).forEach(key => {
        if (Iterable.isIterable(state[key])) {
          newState[key] = state[key].toJS();
        } else {
          if (state[key] && Object.keys(state[key]).length) {
            newState[key] = {};
            Object.keys(state[key]).forEach(_key => {
              if (Iterable.isIterable(state[key][_key])) {
                newState[key][_key] = state[key][_key].toJS();
              }
            });
          } else {
            newState[key] = state[key];
          }
        }
      });

      return newState;
    }
  }))
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}
