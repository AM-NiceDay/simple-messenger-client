import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './features/auth/duck';
import messenger from './features/Messenger/duck';

export default combineReducers({
  auth,
  messenger,
  routing: routerReducer,
});
