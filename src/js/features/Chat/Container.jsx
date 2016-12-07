import React from 'react';
import { connect } from 'react-redux';
import { fetchChatMessages, postChatMessage } from './actions';
import { getChatMessages, getPeer } from './selectors';
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

  handleMessagePost(text) {
    const { postMessage, params } = this.props;

    return postMessage({ chatId: params.chatId, text });
  }

  render() {
    const { messages, peer } = this.props;

    return (
      <ChatComponent
        messages={messages}
        peer={peer}
        onMessagePost={this.handleMessagePost}
      />
    );
  }
}

const mapStateToProps = (store, props) => ({
  messages: getChatMessages(store),
  peer: getPeer(store, props.params.chatId),
});
const mapDispatchToProps = {
  fetchMessages: fetchChatMessages,
  postMessage: postChatMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
