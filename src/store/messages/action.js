import { MESSAGE_CREATE, MESSAGE_DELETE } from '../actionTypes';

const DEFAULT_ERROR_MESSAGE = 'Oops something went wrong!';
const DEFAULT_SUCCESS_MESSAGE = 'Success';

export function createErrorMessage(list = [DEFAULT_ERROR_MESSAGE]) {
  const message = { list, messageType: 'error' };
  return { type: MESSAGE_CREATE, message };
}

export function createSuccessMessage(list = [DEFAULT_SUCCESS_MESSAGE]) {
  const message = { list, messageType: 'success' };
  return { type: MESSAGE_CREATE, message };
}

export function deleteMessage() {
  return { type: MESSAGE_DELETE };
}
