import classNames from 'classnames';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { deleteMessage } from '../../store/messages/action';
import Message from '../../components/Message/Messages';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = { finished: false };
  }

  removeMessage() {
    this.props.dispatch(deleteMessage());
    this.resetState();
  }

  resetState() {
    this.setState({ finished: false });
  }

  triggerSlideUp() {
    this.setState({ finished: true });
  }

  render() {
    const { message } = this.props;
    if (!message) {
      return null;
    }

    const messages = message.list.map((text, index) => {
      return (
        <Message
          key={index}
          message={text}
          removeMessage={() => {
            this.removeMessage();
          }}
          triggerSlideUp={() => {
            this.triggerSlideUp();
          }}
        />
      );
    });

    const messageClasses = classNames('messages', `${message.messageType}`, {
      remove: this.state.finished,
    });
    return <div className={messageClasses}>{messages}</div>;
  }
}

Messages.propTypes = {
  dispatch: PropTypes.func,
  message: PropTypes.object,
  removeMessage: PropTypes.func,
  triggerSlideUp: PropTypes.func,
  resetState: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    message: state.messages.message,
  };
}

export default connect(mapStateToProps)(Messages);
