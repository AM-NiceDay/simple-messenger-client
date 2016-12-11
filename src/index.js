import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import api from './js/modules/api';
import createStore from './js/createStore';
import getRoutes from './js/getRoutes';

const store = createStore();
const history = syncHistoryWithStore(browserHistory, store);

api.initialize(store);

injectTapEventPlugin();
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#2D3C55',
    accent1Color: 'rgba(0,0,0,.87)',
  },
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={history}>
        {getRoutes(store)}
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
