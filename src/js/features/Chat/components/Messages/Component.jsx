import React from 'react';
import moment from 'moment';

import './styles.css';

export default ({ messages }) => (
  <div className="chat-messages">
    {messages.map(message => (
      <div className="chat-messages__message" key={message._id}>
        <img className="chat-messages__message-photo" src={message.user.photoUrl} alt="user" />
        <div className="chat-messages__message-content">
          <div className="chat-messages__message-content-header">
            <span className="chat-messages__message-name">{message.user.fullName}</span>
            <span className="chat-messages__message-time">{moment(message.created).format('h:mm A')}</span>
          </div>
          <span className="chat-messages__message-content-body">{message.text}</span>
        </div>
      </div>
    ))}
  </div>
);
