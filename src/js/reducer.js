import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth/duck';

export default combineReducers({
  auth,
  routing: routerReducer,
});
