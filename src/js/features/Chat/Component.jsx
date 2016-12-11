import React from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import ChatMessages from './components/Messages';
import ChatForm from './components/Form';

class Chat extends React.Component {
  componentDidUpdate() {
    const { messages } = this.refs;
    const scrollHeight = messages.scrollHeight;
    ReactDOM.findDOMNode(messages).scrollTop = scrollHeight;
  }

  render () {
    const { messages, peer, onMessagePost } = this.props;

    return (
      <div className="messenger__chat">
        <div className="messenger__chat-header">
          <div className="messenger__chat-info">
            <img className="messenger__chat-photo" src={peer.photoUrl} alt="user" />
            <span className="messenger__chat-name">{peer.fullName}</span>
            <span className="messenger__chat-status">{peer.status === 'online' ? 'Online' : 'Offline'}</span>
          </div>
        </div>
        <div
          className={cn({
            'messenger__chat-messages-wrap': true,
            'messenger__chat-messages-wrap--no-messages': messages.length === 0,
          })}
          ref="messages"
        >
          {messages.length > 0 ?
            <ChatMessages messages={messages} /> :
            'No messages here yet'
          }
        </div>
        <ChatForm onSubmit={onMessagePost} />
      </div>
    );
  }
}

export default Chat;
