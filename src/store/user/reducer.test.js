import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actionTypes';

import user from './reducer';

describe('User reducer', () => {
  const initialState = {
    isAuthenticated: false,
    userDetails: {},
    requesting: false,
  };

  it('handles default state', () => {
    expect(user(undefined, {})).toEqual(initialState);
  });

  it('handles LOGIN_REQUEST action', () => {
    const action = { type: LOGIN_REQUEST };
    const expectedState = {
      isAuthenticated: false,
      userDetails: {},
      requesting: true,
    };

    expect(user(initialState, action)).toEqual(expectedState);
  });

  it('handles LOGIN_SUCCESS action', () => {
    const userDetails = { email: 'user@example.com', userId: 1 };
    const action = { type: LOGIN_SUCCESS, user: userDetails };
    const expectedState = {
      isAuthenticated: true,
      userDetails: userDetails,
      requesting: false,
    };

    expect(user(initialState, action)).toEqual(expectedState);
  });

  it('handles LOGIN_FAILURE action', () => {
    const action = { type: LOGIN_FAILURE };
    const expectedState = {
      isAuthenticated: false,
      userDetails: {},
      requesting: false,
    };

    expect(user(initialState, action)).toEqual(expectedState);
  });

  it('handles LOGOUT action', () => {
    const action = { type: LOGOUT };
    const expectedState = {
      isAuthenticated: false,
      userDetails: {},
      requesting: false,
    };

    expect(user(initialState, action)).toEqual(expectedState);
  });
});
