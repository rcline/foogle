import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const initialState = {
  forms: {},
  questions: {},
  responses: {},
};

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) :
    compose;
/* eslint-enable */

const store = createStore(
  combineReducers({
    ...reducers,
  }),
  initialState,
  composeEnhancers(
    applyMiddleware(thunk)
  ),
);

export default store;
