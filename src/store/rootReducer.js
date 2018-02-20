import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import messages from './messages/reducer';
import user from './user/reducer';
import { LOGOUT } from './actionTypes';

const appReducer = combineReducers({
  router: routerReducer,
  user,
  messages,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
