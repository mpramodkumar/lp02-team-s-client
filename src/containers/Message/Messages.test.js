import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { mockInitialState, mockStore } from '../../_mocks/mockInitialState';
import Message from '../../components/Message/Messages';
import Messages from './Messages';

describe('Container: Message', () => {
  let wrapper;
  let flashMessages;

  const getStoreData = (list = null, messageType = null) => {
    let message = null;

    if (list || messageType) {
      message = { list, messageType };
    }

    return Object.assign({}, mockInitialState, { flashMessages: { message } });
  };

  const mountComponent = store => {
    return mount(
      <Provider store={store}>
        <message />
      </Provider>
    );
  };

  it('should be hidden if there is no error', () => {
    const store = mockStore(getStoreData());
    wrapper = mountComponent(store);
    flashMessages = wrapper.find(Messages);
    expect(flashMessages.contains(<div className="messages__text" />)).toBe(
      false
    );
  });
});
