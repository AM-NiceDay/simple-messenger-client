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
            <img className="messenger__sidebar-user-image" src="https://randomuser.me/api/portraits/women/32.jpg" />
            <div className="messenger__sidebar-user-status" />
          </div>
          <div className="messenger__sidebar-user-info">
            <span className="messenger__sidebar-user-info-name">Elaine Mendoza</span>
            <span className="messenger__sidebar-user-last-message">I think, I will be busy today</span>
          </div>
          <span className="messenger__sidebar-user-last-message-date">1 hour ago</span>
        </div>
        <div className="messenger__sidebar-user">
          <div className="messenger__sidebar-user-photo">
            <img className="messenger__sidebar-user-image" src="https://randomuser.me/api/portraits/men/50.jpg" />
            <div className="messenger__sidebar-user-status" />
          </div>
          <div className="messenger__sidebar-user-info">
            <span className="messenger__sidebar-user-info-name">Douglas Mckinney</span>
            <span className="messenger__sidebar-user-last-message">Sure, it's okey</span>
          </div>
          <span className="messenger__sidebar-user-last-message-date">Yesterday</span>
        </div>
        <div className="messenger__sidebar-user">
          <div className="messenger__sidebar-user-photo">
            <img className="messenger__sidebar-user-image" src="https://randomuser.me/api/portraits/women/42.jpg" />
            <div className="messenger__sidebar-user-status" />
          </div>
          <div className="messenger__sidebar-user-info">
            <span className="messenger__sidebar-user-info-name">Connie Evans</span>
            <span className="messenger__sidebar-user-last-message">By the way, call me when...</span>
          </div>
          <span className="messenger__sidebar-user-last-message-date">27 November</span>
        </div>
      </div>
    </div>
    <div className="messenger__chat">
      <div className="messenger__chat-header">
        <div className="messenger__chat-info">
          <img className="messenger__chat-photo" src="https://randomuser.me/api/portraits/men/50.jpg" />
          <span className="messenger__chat-name">Douglas Mckinney</span>
          <span className="messenger__chat-status">Online</span>
        </div>
      </div>
      <div className="messenger__chat-messages">
        <div className="messenger__chat-message">
          <img className="messenger__chat-message-photo" src="https://randomuser.me/api/portraits/men/50.jpg" alt="user-image" />
          <div className="messenger__chat-message-content">
            <div className="messenger__chat-message-content-header">
              <span className="messenger__chat-message-name">Douglas Mckinney</span>
              <span className="messenger__chat-message-time">9:08 PM</span>
            </div>
            <span className="messenger__char-message-content-body">Sure, it's okey</span>
          </div>
        </div>
        <div className="messenger__chat-message">
          <img className="messenger__chat-message-photo" src="https://randomuser.me/api/portraits/men/85.jpg" alt="user-image" />
          <div className="messenger__chat-message-content">
            <div className="messenger__chat-message-content-header">
              <span className="messenger__chat-message-name">Mae Lucas</span>
              <span className="messenger__chat-message-time">9:08 PM</span>
            </div>
            <span className="messenger__char-message-content-body">Fine. I was thinking about your suggest. What do you think if I will take a book for a few weeks?</span>
          </div>
        </div>
        <div className="messenger__chat-message">
          <img className="messenger__chat-message-photo" src="https://randomuser.me/api/portraits/men/50.jpg" alt="user-image" />
          <div className="messenger__chat-message-content">
            <div className="messenger__chat-message-content-header">
              <span className="messenger__chat-message-name">Douglas Mckinney</span>
              <span className="messenger__chat-message-time">8:52 PM</span>
            </div>
            <span className="messenger__char-message-content-body">Hey, going well. U?</span>
          </div>
        </div>
        <div className="messenger__chat-message">
          <div className="messenger__chat-message-content">
            <span className="messenger__char-message-content-body">How is it going?</span>
          </div>
        </div>
        <div className="messenger__chat-message">
          <img className="messenger__chat-message-photo" src="https://randomuser.me/api/portraits/men/85.jpg" alt="user-image" />
          <div className="messenger__chat-message-content">
            <div className="messenger__chat-message-content-header">
              <span className="messenger__chat-message-name">Mae Lucas</span>
              <span className="messenger__chat-message-time">8:47 PM</span>
            </div>
            <span className="messenger__char-message-content-body">Hello</span>
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
