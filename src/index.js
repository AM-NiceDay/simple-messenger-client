import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './js/App';
import SignUpPage from './js/SignUpPage';
import Messenger from './js/Messenger';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#2D3C55',
  },
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={() => <div>Hello</div>} />
        <Route path="signup" component={SignUpPage} />
        <Route path="messenger" component={Messenger} />
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
