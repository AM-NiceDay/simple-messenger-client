import React from 'react';
import { Link } from 'react-router';
import Logo from '../Logo';
import './styles.css';

export default ({ user, chats, children }) => (
  <div className="messenger">
    <div className="messenger__sidebar">
      <div className="messenger__sidebar-header">
        <Logo theme="light" />
      </div>
      <div className="messenger__sidebar-profile">
        <img className="messenger__sidebar-profile-image" src="http://www.themeparkinsider.com/assets/PROF_NewUserIcon.png" alt="user" />
        <span className="messenger__sidebar-profile-name">{user.email}</span>
        <span className="messenger__sidebar-profile-email">{user.email}</span>
      </div>
      <div className="messenger__sidebar-users">
        <div className="messenger__sidebar-users-search">
          <input className="messenger__sidebar-users-search-input" type="text" placeholder="Search..."/>
        </div>
        {chats.map(chat => (
          <Link to={`/messenger/@${chat._id}`} className="messenger__sidebar-user" key={chat._id}>
            <div className="messenger__sidebar-user-photo">
              <img className="messenger__sidebar-user-image" src="http://www.themeparkinsider.com/assets/PROF_NewUserIcon.png" alt="user" />
              <div className="messenger__sidebar-user-status" />
            </div>
            <div className="messenger__sidebar-user-info">
              <span className="messenger__sidebar-user-info-name">{chat.users.filter(peer => peer._id  !== user._id)[0].email}</span>
              <span className="messenger__sidebar-user-last-message">{chat.lastMessage || 'No messages here yet...'}</span>
            </div>
            <span className="messenger__sidebar-user-last-message-date">-</span>
          </Link>
        ))}
      </div>
    </div>

    <div className="messenger__chat">
      {children}
    </div>

  </div>
);
