import React from 'react';
import { Link } from 'react-router';
import cn from 'classnames';
import Logo from '../Logo';
import TimeAgo from 'react-timeago';

import './styles.css';

export default ({ user, chats, children }) => (
  <div className="messenger">
    <div className="messenger__menu">
      <div className="messenger__logo">
        <Logo theme="light" />
      </div>
      <div className="messenger__profile">
        <img className="messenger__profile-image" src={user.photoUrl} alt="user" />
        <span className="messenger__profile-name">{user.fullName}</span>
        <span className="messenger__profile-email">{user.email}</span>
      </div>
      <div className="messenger__menu-chats">
        <div className="messenger__menu-chats-actions">
          <input className="messenger__menu-chats-search" type="text" placeholder="Search..."/>
          <Link className="messenger__menu-create-chat" to="/messenger/new" />
        </div>
        {chats.map(chat => (
          <Link to={`/messenger/@${chat._id}`} className="messenger__menu-chat" key={chat._id}>
            <div className="messenger__menu-chat-peer-photo">
              <img className="messenger__menu-chat-peer-image" src={chat.users.filter(peer => peer._id  !== user._id)[0].photoUrl} alt="user" />
              <div className="messenger__menu-chat-peer-status" />
            </div>
            <div className="messenger__menu-chat-info">
              <span className="messenger__menu-chat-peer-name">{chat.users.filter(peer => peer._id  !== user._id)[0].fullName}</span>
              <span className="messenger__menu-chat-last-message">{chat.lastMessage ? chat.lastMessage.text : 'No messages here yet'}</span>
            </div>
            {chat.lastMessage && (
              <span className="messenger__menu-chat-last-message-date">
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
        'messenger__chat--not-selected': !children,
      })}
    >
      {children || 'Select a chat to start messaging'}
    </div>

  </div>
);
