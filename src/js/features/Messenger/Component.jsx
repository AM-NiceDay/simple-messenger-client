import React from 'react';
import { Link } from 'react-router';
import cn from 'classnames';
import Logo from '../Logo';
import TimeAgo from 'react-timeago';
import './styles.css';

export default ({ user, chats, children }) => (
  <div className="messenger">
    <div className="messenger__sidebar">
      <div className="messenger__sidebar-header">
        <Logo theme="light" />
      </div>
      <div className="messenger__sidebar-profile">
        <img className="messenger__sidebar-profile-image" src={user.photoUrl} alt="user" />
        <span className="messenger__sidebar-profile-name">{user.fullName}</span>
        <span className="messenger__sidebar-profile-email">{user.email}</span>
      </div>
      <div className="messenger__sidebar-users">
        <div className="messenger__sidebar-users-search">
          <input className="messenger__sidebar-users-search-input" type="text" placeholder="Search..."/>
        </div>
        {chats.map(chat => (
          <Link to={`/messenger/@${chat._id}`} className="messenger__sidebar-user" key={chat._id}>
            <div className="messenger__sidebar-user-photo">
              <img className="messenger__sidebar-user-image" src={chat.users.filter(peer => peer._id  !== user._id)[0].photoUrl} alt="user" />
              <div className="messenger__sidebar-user-status" />
            </div>
            <div className="messenger__sidebar-user-info">
              <span className="messenger__sidebar-user-info-name">{chat.users.filter(peer => peer._id  !== user._id)[0].fullName}</span>
              <span className="messenger__sidebar-user-last-message">{chat.lastMessage ? chat.lastMessage.text : 'No messages here yet'}</span>
            </div>
            {chat.lastMessage && (
              <span className="messenger__sidebar-user-last-message-date">
                <TimeAgo date={chat.lastMessage.created} minPeriod={30} />
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>

    <div
      className={cn({
        'messenger__chat': true,
        'messenget__chat--not-selected': !children,
      })}
    >
      {children || 'Select a chat to start messaging'}
    </div>

  </div>
);
