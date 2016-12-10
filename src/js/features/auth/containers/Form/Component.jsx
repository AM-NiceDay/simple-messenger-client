import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import './styles.css';

const withVal = fn => e => fn(e.target.value);

export default ({ title, description, submitButtonText, redirectButtonText, redirectButtonLink, email, password, onEmailChange, onPasswordChange, onSubmit }) => (
  <div>
    <div className="auth-form__body">
      <p className="auth-form__description">{description}</p>
      <div className="auth-form__inputs">
        <TextField
          className="auth-form__input"
          floatingLabelText="Email"
          value={email}
          onChange={withVal(onEmailChange)}
        />
        <TextField
          className="auth-form__input"
          floatingLabelText="Password"
          type="password"
          value={password}
          onChange={withVal(onPasswordChange)}
        />
      </div>
    </div>
    <div className="auth-form__buttons">
      <FlatButton label={submitButtonText} onClick={onSubmit} />
    </div>
  </div>
);
