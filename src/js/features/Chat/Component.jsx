import React from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import throttle from 'lodash/fp/throttle';
import ChatMessages from './components/Messages';
import ChatForm from './components/Form';

import './styles.css';

class Chat extends React.Component {
  componentDidUpdate() {
    const { messages } = this.refs;
    const scrollHeight = messages.scrollHeight;
    ReactDOM.findDOMNode(messages).scrollTop = scrollHeight;
  }

  render () {
    const { messages, newMessages, peer, onMessagePost, onReadNew } = this.props;

    return (
      <div className="chat">
        <div className="chat__header">
          {peer && (
            <div className="chat__info">
              <img className="chat__photo" src={peer.photoUrl} alt="user" />
              <span className="chat__name">{peer.fullName}</span>
              <span className="chat__status">{peer.status === 'online' ? 'Online' : 'Offline'}</span>
            </div>
          )}
        </div>
        <div
          className={cn({
            'chat__messages-wrap': true,
            'chat__messages-wrap--no-messages': messages.length === 0,
          })}
          ref="messages"
        >
          {messages.length > 0 || newMessages.length > 0 ?
            (
              <div className="chat__messages">
                <ChatMessages messages={messages} />
                {newMessages.length > 0 &&
                  <div onMouseOver={throttle(2000, onReadNew)}>
                    <div className="chat__divider">
                      <span className="chat__divider-text">New messages</span>
                    </div>
                    <ChatMessages messages={newMessages} />
                  </div>
                }
              </div>
            ) :
            'No messages here yet'
          }
        </div>
        <ChatForm onSubmit={onMessagePost} />
      </div>
    );
  }
}

export default Chat;
