import React from 'react';
import { connect } from 'react-redux';
import filter from 'lodash/fp/filter';
import { getPopulatedChat, getPopulatedChatMessages } from '../core/data';
import { selectors as authSelectors } from '../Auth';
import { fetchChatMessages, postChatMessage, updateChatLastRead } from './actions';
import ChatComponent from './Component';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.handleMessagePost = this.handleMessagePost.bind(this);
    this.handleReadNew = this.handleReadNew.bind(this);
  }

  componentDidMount() {
    const { fetchMessages, params } = this.props;
    fetchMessages(params.chatId);
  }

  componentDidUpdate(prevProps) {
    const { fetchMessages, params } = this.props;

    if (prevProps.params.chatId !== params.chatId) {
      fetchMessages(params.chatId);
    }
  }

  handleMessagePost(text) {
    const { postMessage, params } = this.props;
    return postMessage({ chatId: params.chatId, text });
  }

  handleReadNew() {
    const { updateLastRead, params } = this.props;
    updateLastRead({ chatId: params.chatId, lastReadDate: new Date() });
  }

  render() {
    const { user, chat: { peer, lastRead }, messages } = this.props;
    const userLastRead = lastRead ? lastRead[user._id] : null;
    const newMessages = filter(message => message.created > userLastRead, messages);
    const readMessages = filter(message => message.created <= userLastRead, messages);

    return (
      <ChatComponent
        messages={readMessages}
        newMessages={newMessages}
        peer={peer}
        onMessagePost={this.handleMessagePost}
        onReadNew={this.handleReadNew}
      />
    );
  }
}

const mapStateToProps = (state, props) => ({
  user: authSelectors.getLoggedInUser(state),
  chat: getPopulatedChat(state, props.params.chatId),
  messages: getPopulatedChatMessages(state, props.params.chatId),
});
const mapDispatchToProps = {
  fetchMessages: fetchChatMessages,
  postMessage: postChatMessage,
  updateLastRead: updateChatLastRead,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
