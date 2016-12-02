import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../duck';
import SignUpPageComponent from './Component';

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(email) {
    this.setState({ email });
  }

  handlePasswordChange(password) {
    this.setState({ password });
  }

  handleSubmit() {
    const { email, password } = this.state;
    const { handleSignUp } = this.props;

    handleSignUp(email, password);
  }

  render() {
    const { email, password } = this.state;

    return (
      <SignUpPageComponent
        email={email}
        password={password}
        onEmailChange={this.handleEmailChange}
        onPasswordChange={this.handlePasswordChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = {
  handleSignUp: signUp,
}

export default connect(null, mapDispatchToProps)(SignUpPage);
