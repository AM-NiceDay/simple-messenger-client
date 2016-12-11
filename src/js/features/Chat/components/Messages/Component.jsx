import React from 'react';
import moment from 'moment';

export default ({ messages }) => (
  <div className="messenger__chat-messages">
    {messages.map(message => (
      <div className="messenger__chat-message" key={message._id}>
        <img className="messenger__chat-message-photo" src={message.user.photoUrl} alt="user" />
        <div className="messenger__chat-message-content">
          <div className="messenger__chat-message-content-header">
            <span className="messenger__chat-message-name">{message.user.fullName}</span>
            <span className="messenger__chat-message-time">{moment(message.created).format('h:mm A')}</span>
          </div>
          <span className="messenger__char-message-content-body">{message.text}</span>
        </div>
      </div>
    ))}
  </div>
);
