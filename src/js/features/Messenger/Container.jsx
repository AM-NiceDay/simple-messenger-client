import React from 'react';
import { connect } from 'react-redux';
import createSocket from 'socket.io-client';
import { fetchChats } from './actions';
import { actions as chatActions } from '../Chat';
import { getChats } from './selectors';
import Component from './Component';

class Messenger extends React.Component {
  componentDidMount() {
    this.props.fetchChats();

    const socket = createSocket('http://localhost:8080');
    socket.on('connect', () => {
      socket.emit('ws/listening', { userId: this.props.user._id });
      socket.on('ws/new-message', ({ chatId }) => this.props.fetchChatMessages(chatId));
    });
  }

  render() {
    const { children, user, chats } = this.props;
    return <Component user={user} chats={chats} children={children} />;
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  chats: getChats(state),
});

const mapDispatchToProps = {
  fetchChats,
  fetchChatMessages: chatActions.fetchChatMessages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Messenger);
