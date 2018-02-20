import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm } from './LoginForm';

describe('Component: LoginForm', () => {
  const spy = jest.fn();

  const submitSpy = jest.fn();

  const wrapper = shallow(
    <LoginForm
      email=""
      password=""
      onChange={spy}
      onSubmit={submitSpy}
      storeUser={false}
    />
  );

  it('should render an email TextField', () => {
    expect(wrapper.find('.LoginForm-email').exists()).toBe(true);
  });

  it('should render an password TextField', () => {
    expect(wrapper.find('.LoginForm-password').exists()).toBe(true);
  });

  it('should render a submit button', () => {
    expect(wrapper.find('.LoginForm-submit').exists()).toBe(true);
  });

  it('should trigger onChange when email text is entered', () => {
    const emailField = wrapper.find('.LoginForm-email');

    const emailInput = ['email', 'tom@example.com'];

    emailField.simulate('change', emailInput[1]);
    expect(spy).toHaveBeenCalledWith(emailInput[0], emailInput[1]);
  });

  it('should trigger onChange when password text is entered', () => {
    const passwordField = wrapper.find('.LoginForm-password');

    const passwordInput = ['password', 'balloon'];

    passwordField.simulate('change', passwordInput[1]);
    expect(spy).toHaveBeenCalledWith(passwordInput[0], passwordInput[1]);
  });

  it('should trigger onSubmit when submit button is clicked', () => {
    const submitButton = wrapper.find('.LoginForm-submit');

    submitButton.simulate('click');
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should disable onSubmit button if email is not valid', () => {
    const disabledWrapper = shallow(
      <LoginForm
        email="tom@tom"
        password=""
        onChange={spy}
        onSubmit={submitSpy}
        storeUser={false}
      />
    );

    const submitButton = disabledWrapper.find('.LoginForm-submit');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('should disable onSubmit button if password is not valid', () => {
    const disabledWrapper = shallow(
      <LoginForm
        email="tom@tom.com"
        password="123"
        onChange={spy}
        onSubmit={submitSpy}
        storeUser={false}
      />
    );

    const submitButton = disabledWrapper.find('.LoginForm-submit');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('should enable onSubmit button if email and password are valid', () => {
    const disabledWrapper = shallow(
      <LoginForm
        email="tom@tom.com"
        password="1234567"
        onChange={spy}
        onSubmit={submitSpy}
        storeUser={false}
      />
    );

    const submitButton = disabledWrapper.find('.LoginForm-submit');
    expect(submitButton.prop('disabled')).toBe(false);
  });
});
