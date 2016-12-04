import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './features/App';
import SignUpPage from './features/auth/SignUpPage';
import SignInPage from './features/auth/SignInPage';
import Messenger from './features/Messenger';
import Chat from './features/Chat';

const requireAuth = (store) => (nextState, replace) => {
  if (!store.getState().auth.user.token) {
    replace({
      pathname: '/signin',
      state: { nextPathname: nextState.location.pathname }
    });
  }
};

export default (store) => (
  <Route path="/" component={App}>
    <IndexRedirect to="messenger" />
    <Route path="signup" component={SignUpPage} />
    <Route path="signin" component={SignInPage} />
    <Route path="messenger" onEnter={requireAuth(store)} component={Messenger}>
      <Route path="@:chatId" component={Chat} />
    </Route>
  </Route>
)
