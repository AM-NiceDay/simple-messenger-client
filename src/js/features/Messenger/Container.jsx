import React from 'react';
import { connect } from 'react-redux';
import createSocket from 'socket.io-client';
import { fetchChats } from '../ChatList';
import { actions as chatActions } from '../Chat';
import Component from './Component';

class Messenger extends React.Component {
  componentDidMount() {
    const socket = createSocket();
    socket.on('connect', () => {
      socket.emit('ws/listening', { userId: this.props.user._id });
      socket.on('ws/new-message', ({ chatId }) => this.props.fetchChatMessages(chatId));
      socket.on('ws/new-chat', () => this.props.fetchChats());
    });
  }

  render() {
    const { children, user } = this.props;
    return (
      <Component
        user={user}
        children={children}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = {
  fetchChats,
  fetchChatMessages: chatActions.fetchChatMessages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Messenger);
