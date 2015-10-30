import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
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
    duration: true
  }))
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}
