import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './js/reducer';
import AuthService from './js/utils/AuthService';
import App from './js/App';
import Messenger from './js/Messenger';

const auth = new AuthService('uA4jpUU4udP87jShFTvZH6jSkH5PG8Os', 'am-niceday.eu.auth0.com');

const requireAuth = () => {
  if (!auth.loggedIn()) {
    auth.login();
  }
};

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#2D3C55',
  },
});

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Messenger} onEnter={requireAuth} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
