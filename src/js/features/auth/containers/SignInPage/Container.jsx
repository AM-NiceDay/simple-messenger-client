import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import Form from '../Form';

const SignInPage = ({ handleSignIn }) => (
  <Form
    title="Sign in"
    description="Please sign in into account or create new one."
    submitButtonText="Enter"
    redirectButtonText="Sign up"
    redirectButtonLink="/signup"
    onSubmit={handleSignIn}
  />
);

export default connect(null, { handleSignIn: signIn })(SignInPage);
