import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './messages.css';

class Message extends Component {
  componentWillMount() {
    const { removeMessage } = this.props;
    this.slideMessageUp();
    setTimeout(() => {
      removeMessage();
    }, 5000);
  }

  slideMessageUp() {
    const { triggerSlideUp } = this.props;
    setTimeout(() => {
      triggerSlideUp();
    }, 500);
  }

  render() {
    const { message } = this.props;
    return <div className="messages__text">{message}</div>;
  }
}

Message.propTypes = {
  message: PropTypes.string,
  removeMessage: PropTypes.func,
  triggerSlideUp: PropTypes.func,
};

export default Message;
