import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actionTypes';

import { loginFailure, loginRequest, loginSuccess } from './action';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('User actions', () => {
  const KEY = 'userDetails';
  const user = { email: 'user@example.com', userId: 1 };

  beforeEach(() => {
    localStorage.clear();
  });

  it('handles loginRequest action creator', () => {
    const action = { type: LOGIN_REQUEST };

    expect(loginRequest()).toEqual(action);
  });

  it('handles loginSuccess action creator', () => {
    const action = { type: LOGIN_SUCCESS, user: user };

    expect(loginSuccess(user)).toEqual(action);
  });

  it('handles storing the user in localstorage', () => {
    const storeUserBool = true;

    loginSuccess(user, storeUserBool);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      KEY,
      JSON.stringify({ email: user.email })
    );
  });

  it('handles removing the stored user from localstorage', () => {
    const storeUserBool = false;

    loginSuccess(user, storeUserBool);
    expect(Object.keys(localStorage.__STORE__).length).toEqual(0);
  });

  it('handles loginFailure action creator', () => {
    const action = { type: LOGIN_FAILURE };

    expect(loginFailure()).toEqual(action);
  });
});
