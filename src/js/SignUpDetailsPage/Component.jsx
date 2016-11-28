import React from 'react';
import Logo from '../Logo'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default () => (
  <div className="sign-up-page">
    <div className="sign-up-page__top-background" />
    <div className="sign-up-page__card">
      <div className="sign-up-page__card-header">
        <Logo />
      </div>
      <div className="sign-up-page__card-body">
        <h1 className="sign-up-page__card-title">Sign up</h1>
        <p className="sign-up-page__card-description">
          Please specify your first and last name.
        </p>
        <div className="sign-up-page__inputs">
          <TextField className="sign-up-page__input" floatingLabelText="First name" />
          <TextField className="sign-up-page__input" floatingLabelText="Last name" />
        </div>
      </div>
      <div className="sign-up-page__buttons">
        <FlatButton label="Create" />
      </div>
    </div>
  </div>
)
