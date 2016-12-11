import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import SwipeableViews from 'react-swipeable-views';
import {Tabs, Tab} from 'material-ui/Tabs';
import Form from './containers/Form';
import Logo from '../Logo';
import { getSignUpErrors } from './selectors';
import { signIn, signUp } from './actions';

import './styles.css';

const getType = index => index === 0 ? 'signin' : 'signup';
const getIndex = type => !type || type === 'signin' ? 0 : 1;

class Auth extends React.Component {
  handleChangeType = type => this.props.handlePush(`/auth/${type}`)
  handleChangeIndex = index => this.handleTypeChange(getType(index))

  render() {
    const { signUpErrors, params, handleSignIn, handleSignUp } = this.props;
    const { type } = params;

    return (
      <div className="auth">
        <div className="auth__top-background" />
        <div className="auth__card">
          <div className="auth__card-header">
            <Logo />
          </div>
          <Tabs className="auth__tabs" onChange={this.handleChangeType} value={type}>
            <Tab className="auth__tab" label="Sign in" value={'signin'} />
            <Tab className="auth__tab" label="Sign up" value={'signup'} />
          </Tabs>
          <SwipeableViews index={getIndex(type)} onChangeIndex={this.handleChangeIndex}>
            <Form
              description="Please sign into your account or create new one"
              errors={{}}
              submitButtonText="Enter"
              onSubmit={handleSignIn}
            />
            <Form
              description="Please create new account or sign in into existing one"
              submitButtonText="Create"
              errors={signUpErrors}
              onSubmit={handleSignUp}
            />
          </SwipeableViews>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signUpErrors: getSignUpErrors(state),
});

const mapDispatchToProps = {
  handlePush: push,
  handleSignIn: signIn,
  handleSignUp: signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
