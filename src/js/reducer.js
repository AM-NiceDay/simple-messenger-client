import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth/duck';
import messenger from './Messenger/duck';

export default combineReducers({
  auth,
  messenger,
  routing: routerReducer,
});
