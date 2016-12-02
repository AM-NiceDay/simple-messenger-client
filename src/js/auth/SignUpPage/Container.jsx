import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../duck';
import Form from '../Form';

const SignUpPage = ({ handleSignUp }) => (
  <Form
    title="Sign up"
    description="Please create account or login into existing one."
    onSubmit={handleSignUp}
  />
);

export default connect(null, { handleSignUp: signUp })(SignUpPage);
