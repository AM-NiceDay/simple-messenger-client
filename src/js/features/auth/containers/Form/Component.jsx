import React from 'react';
import { Link } from 'react-router';
import Logo from '../../../Logo';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import './styles.css';

const withVal = fn => e => fn(e.target.value);

export default ({ title, description, submitButtonText, redirectButtonText, redirectButtonLink, email, password, onEmailChange, onPasswordChange, onSubmit }) => (
  <div className="sign-up-page">
    <div className="sign-up-page__top-background" />
    <div className="sign-up-page__card">
      <div className="sign-up-page__card-header">
        <Logo />
      </div>
      <div className="sign-up-page__card-body">
        <h1 className="sign-up-page__card-title">{title}</h1>
        <p className="sign-up-page__card-description">{description}</p>
        <div className="sign-up-page__inputs">
          <TextField
            className="sign-up-page__input"
            floatingLabelText="Email"
            value={email}
            onChange={withVal(onEmailChange)}
          />
          <TextField
            className="sign-up-page__input"
            floatingLabelText="Password"
            type="password"
            value={password}
            onChange={withVal(onPasswordChange)}
          />
        </div>
      </div>
      <div className="sign-up-page__buttons">
        <Link to={redirectButtonLink}>
          <FlatButton label={redirectButtonText} />
        </Link>
        <FlatButton label={submitButtonText} onClick={onSubmit} />
      </div>
    </div>
  </div>
);
