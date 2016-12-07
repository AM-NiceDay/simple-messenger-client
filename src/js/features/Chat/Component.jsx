import React from 'react';
import fecha from 'fecha';

export default ({ messages, peer }) => (
  <div className="messenger__chat">
    <div className="messenger__chat-header">
      <div className="messenger__chat-info">
        <img className="messenger__chat-photo" src={peer.photoUrl} alt="user" />
        <span className="messenger__chat-name">{peer.fullName}</span>
        <span className="messenger__chat-status">{peer.status === 'online' ? 'Online' : 'Offline'}</span>
      </div>
    </div>
    <div className="messenger__chat-messages">
      {messages.map(message => (
        <div className="messenger__chat-message" key={message._id}>
          <img className="messenger__chat-message-photo" src={message.user.photoUrl} alt="user" />
          <div className="messenger__chat-message-content">
            <div className="messenger__chat-message-content-header">
              <span className="messenger__chat-message-name">{message.user.fullName}</span>
              <span className="messenger__chat-message-time">{fecha.format(new Date(message.created), 'h:mm A')}</span>
            </div>
            <span className="messenger__char-message-content-body">{message.text}</span>
          </div>
        </div>
      ))}
    </div>
    <div className="messenger__chat-form">
      <input className="messenger__chat-form-text-input" type="text" placeholder="Write a message..."/>
      <button className="messenger__chat-form-submit-button" />
    </div>
  </div>
)
