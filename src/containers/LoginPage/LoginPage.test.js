import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { mockInitialState, mockStore } from '../../_mocks/mockInitialState';
import { LoginPage } from './LoginPage';

describe('Container: LoginPage', () => {
  let loginPage;

  beforeEach(() => {
    const wrapper = mount(
      <Provider store={mockStore(mockInitialState)}>
        <LoginPage />
      </Provider>
    );
    return (loginPage = wrapper.find(LoginPage));
  });

  it('renders without crashing', () => {
    expect(loginPage.exists()).toBe(true);
  });

  it('should render a LoginForm', () => {
    expect(loginPage.find('.LoginForm').exists()).toBe(true);
  });

  it('Submits a user', () => {
    const submit = loginPage.find('button .LoginForm-submit');
    const mockSubmit = jest.fn();

    submit.simulate('click', mockSubmit());
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});
