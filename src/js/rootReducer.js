import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { dataReducer } from './modules/data';
import { reducer as auth } from './features/Auth';
import { reducer as chat } from './features/Chat';
import { reducer as createChat } from './features/CreateChat';
import { reducer as messenger } from './features/Messenger';

export default combineReducers({
  auth,
  chat,
  createChat,
  messenger,
  data: dataReducer,
  routing: routerReducer,
});
