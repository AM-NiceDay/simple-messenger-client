import React from 'react';
import FormComponent from './Component';

class Form extends React.Component {
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
    const { onSubmit } = this.props;

    onSubmit(email, password);
  }

  render() {
    const { email, password } = this.state;
    const { description, submitButtonText, errors } = this.props;

    return (
      <FormComponent
        description={description}
        submitButtonText={submitButtonText}
        email={email}
        password={password}
        errors={errors}
        onEmailChange={this.handleEmailChange}
        onPasswordChange={this.handlePasswordChange}
        onSubmit={this.handleSubmit}ds
      />
    );
  }
}

export default Form;
