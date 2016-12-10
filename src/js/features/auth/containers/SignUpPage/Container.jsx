import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../actions';
import Form from '../Form';

const SignUpPage = ({ handleSignUp }) => (
  <Form
    title="Sign up"
    description="Please create account or login into existing one."
    submitButtonText="Create"
    redirectButtonText="Sign in"
    redirectButtonLink="/signin"
    onSubmit={handleSignUp}
  />
);

export default connect(null, { handleSignUp: signUp })(SignUpPage);
