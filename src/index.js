import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import reducer from './js/reducer';
import saga from './js/saga';
import App from './js/App';
import Messenger from './js/Messenger';
import SignUpPage from './js/auth/SignUpPage';
import SignInPage from './js/auth/SignInPage';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#2D3C55',
  },
});

const sagaMiddleware = createSagaMiddleware()

const persistedState = JSON.parse(localStorage.getItem('redux-state')) || {};
const store = createStore(
  reducer,
  persistedState,
  applyMiddleware(
    createLogger(),
    sagaMiddleware,
    routerMiddleware(browserHistory)
  )
);

store.subscribe(() => {
  localStorage.setItem('redux-state', JSON.stringify(store.getState()));
})

sagaMiddleware.run(saga);

// const requireAuth = () => {
//   if (!auth.loggedIn()) {
//     auth.login();
//   }
// };

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Messenger} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/signin" component={SignInPage} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
