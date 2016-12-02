import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../duck';
import Form from '../Form';

const SignInPage = ({ handleSignIn }) => (
  <Form
    title="Sign in"
    description="Please sign in into account or create new one."
    onSubmit={handleSignIn}
  />
);

export default connect(null, { handleSignIn: signIn })(SignInPage);
