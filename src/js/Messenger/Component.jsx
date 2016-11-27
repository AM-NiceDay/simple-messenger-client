import React from 'react';
import Logo from '../Logo';
import './styles.css';

export default () => (
  <div className="messenger">
    <div className="messenger__sidebar">
      <div className="messenger__sidebar-header">
        <Logo theme="light" />
      </div>
      <div className="messenger__sidebar-profile">
        <img className="messenger__sidebar-profile-image" src="https://randomuser.me/api/portraits/men/85.jpg" />
        <span className="messenger__sidebar-profile-name">Mae Lucas</span>
        <span className="messenger__sidebar-profile-email">mae.lucas76@gmail.com</span>
      </div>
      <div className="messenger__sidebar-users">
        <div className="messenger__sidebar-users-search">
          <input className="messenger__sidebar-users-search-input" type="text" placeholder="Search..."/>
        </div>
        <div className="messenger__sidebar-user">
          <div className="messenger__sidebar-user-photo">
            <img className="messenger__sidebar-user-image" src="https://randomuser.me/api/portraits/men/85.jpg" />
            <div className="messenger__sidebar-user-status" />
          </div>
          <div className="messenger__sidebar-user-info">
            <span className="messenger__sidebar-user-info-name">Billie Riley</span>
            <span className="messenger__sidebar-user-last-message">Hello, how is it going</span>
          </div>
          <span className="messenger__sidebar-user-last-message-date">Yesterday</span>
        </div>
      </div>
    </div>
    <div className="messenger__chat">
      <div className="messenger__chat-header">
        <div className="messenger__chat-info">
          <img className="messenger__chat-photo" src="https://randomuser.me/api/portraits/men/85.jpg" />
          <span className="messenger__chat-name">Lance Jaminez</span>
          <span className="messenger__chat-status">Online</span>
        </div>
      </div>
      <div className="messenger__chat-messages">
        <div className="messenger__chat-message messenger__chat-message--out">
          <div className="messenger-chat-message-body">
            <div className="messenger__chat-message-content messenger__chat-message-content--out">Some text</div>
            <span className="messenger__chat-message-time">8:48 PM</span>
          </div>
        </div>
        <div className="messenger__chat-message messenger__chat-message--in">
          <div className="messenger-chat-message-body">
            <div className="messenger__chat-message-content messenger__chat-message-content--in">Some text</div>
            <span className="messenger__chat-message-time">8:48 PM</span>
          </div>
        </div>
      </div>
      <div className="messenger__chat-form">
        <input className="messenger__chat-form-text-input" type="text" placeholder="Write a message..."/>
        <button className="messenger__chat-form-submit-button" />
      </div>
    </div>
  </div>
);
