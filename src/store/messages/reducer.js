import { MESSAGE_CREATE, MESSAGE_DELETE } from '../actionTypes';

const initialState = {
  message: null,
};

function message(state = initialState, action) {
  switch (action.type) {
    case MESSAGE_CREATE:
      return { ...state, message: action.message };
    case MESSAGE_DELETE:
      return { ...state, message: null };
    default:
      return state;
  }
}

export default message;
