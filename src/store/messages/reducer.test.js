import { MESSAGE_CREATE, MESSAGE_DELETE } from '../actionTypes';

import message from './reducer';

describe('App message reducer', () => {
  const initialState = {
    message: null,
  };

  it('handles default state', () => {
    expect(message(undefined, {})).toEqual(initialState);
  });

  it('handles a success message', () => {
    const action = { type: MESSAGE_CREATE, message: 'Success' };
    const expectedState = {
      message: 'Success',
    };

    expect(message(initialState, action)).toEqual(expectedState);
  });

  it('handles an error message', () => {
    const action = { type: MESSAGE_CREATE, message: 'Error' };
    const expectedState = {
      message: 'Error',
    };

    expect(message(initialState, action)).toEqual(expectedState);
  });

  it('deletes a message', () => {
    const action = { type: MESSAGE_DELETE };
    expect(message(initialState, action)).toEqual(initialState);
  });
});
