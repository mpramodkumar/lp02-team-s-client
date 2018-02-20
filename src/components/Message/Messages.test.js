import { shallow } from 'enzyme';
import React from 'react';

import Message from './Messages';

describe('Component: Message', () => {
  const text = 'error error';
  const removeFn = jest.fn();
  const slideupFn = jest.fn();

  const wrapper = shallow(
    <Message
      message={text}
      removeMessage={removeFn}
      triggerSlideUp={slideupFn}
    />
  );

  const messageContainer = wrapper.find('.messages__text');

  it('renders the message container without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a message wrapper', () => {
    expect(messageContainer.exists()).toBe(true);
  });

  it('renders an error message', () => {
    expect(wrapper.find('.messages__text').text()).toBe('error error');
  });
});
