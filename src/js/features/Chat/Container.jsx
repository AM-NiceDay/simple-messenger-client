import React from 'react';
import { connect } from 'react-redux';
import { fetchChatMessages } from './duck';
import ChatComponent from './Component';

class Chat extends React.Component {
  componentDidMount() {
    const { fetchChatMessages, params} = this.props;
    fetchChatMessages(params.chatId);
  }

  render() {
    return (
      <ChatComponent />
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = { fetchChatMessages };

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
