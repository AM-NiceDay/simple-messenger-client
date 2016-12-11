import React from 'react';
import FlatButton from 'material-ui/FlatButton';

import './styles.css';

export default ({ users }) => (
  <div className="create-chat">
    {users.map(user => (
      <div className="create-chat__user" key={user._id}>
        <img className="create-chat__user-photo" src={user.photoUrl} alt="user" />
        <div className="create-chat__user-info">
          <span className="create-chat__user-name">{user.fullName}</span>
          <span className="create-chat__user-email">{user.email}</span>
        </div>
        <FlatButton className="create-chat__button" label={'Create chat'} onClick={() => {}} />
      </div>
    ))}
  </div>
);
