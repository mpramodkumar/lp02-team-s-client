import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGOUT,
} from '../actionTypes';
import User from './service';
import { createBrowserHistory } from 'history';
import { createErrorMessage } from '../messages/action';
import {
  retrieveStoredUser,
  setCurrentUser,
  removeStoredUser,
} from '../../_helpers/localStorageHelper.js';
export const history = createBrowserHistory();

export function login({ email, password, storeUser }) {
  return async dispatch => {
    dispatch(loginRequest());
    try {
      const response = await User.login(email, password);
      const { access_token } = response;
      const user = { email };
      sessionStorage.setItem('jwt', access_token);
      dispatch(loginSuccess(user, storeUser));
      dispatch(getMe());
    } catch (error) {
      dispatch(loginFailure());
      dispatch(createErrorMessage(error.messages));
    }
  };
}

export function getMe() {
  return async dispatch => {
    const response = await User.getMe();
    const { firstName, lastName, email } = response;
    const user = { firstName, lastName, email };
    if (response.error || response.errorMessage) {
      console.log('Token exists, but login failed!');
      return;
    }
    dispatch(loginSuccess(user));
  };
}

const storeUser = (email, storeUserBool) => {
  let currentLogin = { email };
  let storedUser = retrieveStoredUser('userDetails');

  if (storedUser !== currentLogin && storeUserBool) {
    setCurrentUser('userDetails', currentLogin);
  } else if (!storeUserBool) {
    removeStoredUser('userDetails');
  }
};

export function loginSuccess(user, storeUserBool) {
  storeUser(user.email, storeUserBool);
  return { type: LOGIN_SUCCESS, user };
}
export function loginRequest() {
  return { type: LOGIN_REQUEST };
}
export function loginFailure() {
  return { type: LOGIN_FAILURE };
}

export function logout() {
  return { type: LOGOUT };
}
