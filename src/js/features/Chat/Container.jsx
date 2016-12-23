import React from 'react';
import { connect } from 'react-redux';
import { fetchChatMessages, postChatMessage } from './actions';
import { getPopulatedChat, getPopulatedChatMessages } from '../core/data';
import ChatComponent from './Component';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.handleMessagePost = this.handleMessagePost.bind(this);
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

  render() {
    const { chat, messages } = this.props;

    return (
      <ChatComponent
        messages={messages}
        peer={chat.peer}
        onMessagePost={this.handleMessagePost}
      />
    );
  }
}

const mapStateToProps = (store, props) => ({
  chat: getPopulatedChat(store, props.params.chatId),
  messages: getPopulatedChatMessages(store, props.params.chatId),
});
const mapDispatchToProps = {
  fetchMessages: fetchChatMessages,
  postMessage: postChatMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
