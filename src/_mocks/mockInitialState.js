import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];

export const mockStore = configureStore(middlewares);

const userDetails = () => {
  return {
    email: 'test@example.com',
    password: 'password',
  };
};

export const mockInitialState = {
  user: {
    userDetails: userDetails(false),
    isAuthenticated: true,
  },
};

export const mockEmptyUser = {
  user: {
    userDetails: {},
    isAuthenticated: false,
  },
};
