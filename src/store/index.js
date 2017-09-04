import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers';

export const history = createHistory();

const initialState = {};
const enchancers = [];
const middleware = [
  thunk,
  routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enchancers.push(devToolsExtension());
  }
};

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enchancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;