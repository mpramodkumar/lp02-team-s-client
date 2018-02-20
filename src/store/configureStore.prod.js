import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

export default function configureStore(history) {
  return createStore(
    rootReducer,
    applyMiddleware(thunk, routerMiddleware(history))
  );
}
