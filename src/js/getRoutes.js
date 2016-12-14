import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './features/App';
import Auth from './features/Auth';
import Messenger from './features/Messenger';
import Chat from './features/Chat';
import CreateChat from './features/CreateChat';

const requireAuth = (store) => (nextState, replace) => {
  if (!store.getState().auth.user.token) {
    replace({
      pathname: '/auth',
      state: { nextPathname: nextState.location.pathname }
    });
  }
};

const cleanUpStore = store => () =>
  store.dispatch({ type: 'simple-messenger/reset' });

export default (store) => (
  <Route path="/" component={App}>
    <IndexRedirect to="messenger" />
    <Route path="auth(/:type)" onEnter={cleanUpStore(store)} component={Auth} />
    <Route path="messenger" onEnter={requireAuth(store)} component={Messenger}>
      <Route path="@:chatId" component={Chat} />
      <Route path="new" component={CreateChat} />
    </Route>
  </Route>
)
