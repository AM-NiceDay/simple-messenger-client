import React from 'react';

export default () => (
  <div className="messenger__chat">
    <div className="messenger__chat-header">
      <div className="messenger__chat-info">
        <img className="messenger__chat-photo" src="https://randomuser.me/api/portraits/men/50.jpg" alt="user" />
        <span className="messenger__chat-name">Douglas Mckinney</span>
        <span className="messenger__chat-status">Online</span>
      </div>
    </div>
    <div className="messenger__chat-messages">
      <div className="messenger__chat-message">
        <img className="messenger__chat-message-photo" src="https://randomuser.me/api/portraits/men/50.jpg" alt="user" />
        <div className="messenger__chat-message-content">
          <div className="messenger__chat-message-content-header">
            <span className="messenger__chat-message-name">Douglas Mckinney</span>
            <span className="messenger__chat-message-time">9:08 PM</span>
          </div>
          <span className="messenger__char-message-content-body">Sure, it's okey</span>
        </div>
      </div>
      <div className="messenger__chat-message">
        <img className="messenger__chat-message-photo" src="https://randomuser.me/api/portraits/men/85.jpg" alt="user" />
        <div className="messenger__chat-message-content">
          <div className="messenger__chat-message-content-header">
            <span className="messenger__chat-message-name">Mae Lucas</span>
            <span className="messenger__chat-message-time">9:08 PM</span>
          </div>
          <span className="messenger__char-message-content-body">Fine. I was thinking about your suggest. What do you think if I will take a book for a few weeks?</span>
        </div>
      </div>
      <div className="messenger__chat-message">
        <img className="messenger__chat-message-photo" src="https://randomuser.me/api/portraits/men/50.jpg" alt="user"/>
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
        <img className="messenger__chat-message-photo" src="https://randomuser.me/api/portraits/men/85.jpg" alt="user" />
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
)
