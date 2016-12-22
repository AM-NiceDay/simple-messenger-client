import React from 'react';
import cn from 'classnames';
import Logo from '../Logo';
import { ChatListContainer } from '../ChatList';

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
        <ChatListContainer />
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
