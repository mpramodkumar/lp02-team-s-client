import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { MESSAGE_CREATE, MESSAGE_DELETE } from '../actionTypes';

import {
  createErrorMessage,
  createSuccessMessage,
  deleteMessage,
} from './action';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Message actions', () => {
  it('handles default createErrorMessage action creator', () => {
    const message = {
      list: ['Oops something went wrong!'],
      messageType: 'error',
    };
    const action = { type: MESSAGE_CREATE, message };

    expect(createErrorMessage()).toEqual(action);
  });

  it('handles custom createErrorMessage action creator', () => {
    const errorText = ['Custom error message!'];
    const message = { list: errorText, messageType: 'error' };
    const action = { type: MESSAGE_CREATE, message: message };

    expect(createErrorMessage(errorText)).toEqual(action);
  });

  it('handles default createSuccessMessage action creator', () => {
    const message = { list: ['Success'], messageType: 'success' };
    const action = { type: MESSAGE_CREATE, message };

    expect(createSuccessMessage()).toEqual(action);
  });

  it('handles custom createSuccessMessage action creator', () => {
    const errorText = ['Custom success message!'];
    const message = {
      list: ['Custom success message!'],
      messageType: 'success',
    };
    const action = { type: MESSAGE_CREATE, message };

    expect(createSuccessMessage(errorText)).toEqual(action);
  });

  it('handles deleteMessage action creator', () => {
    const action = { type: MESSAGE_DELETE };
    expect(deleteMessage()).toEqual(action);
  });
});
