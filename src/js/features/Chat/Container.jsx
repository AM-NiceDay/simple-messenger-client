import React from 'react';
import { connect } from 'react-redux';
import { fetchChatMessages } from './actions';
import { getChatMessages, getPeer } from './selectors';
import ChatComponent from './Component';

class Chat extends React.Component {
  componentDidMount() {
    const { fetchChatMessages, params} = this.props;
    fetchChatMessages(params.chatId);
  }

  render() {
    const { messages, peer } = this.props;

    return (
      <ChatComponent messages={messages} peer={peer} />
    );
  }
}

const mapStateToProps = (store, props) => ({
  messages: getChatMessages(store),
  peer: getPeer(store, props.params.chatId),
});
const mapDispatchToProps = { fetchChatMessages };

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
