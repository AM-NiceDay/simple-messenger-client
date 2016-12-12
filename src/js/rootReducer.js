import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { dataReducer } from './modules/data';
import { reducer as auth } from './features/Auth';
import { reducer as chat } from './features/Chat';
import { reducer as createChat } from './features/CreateChat';
import { reducer as messenger } from './features/Messenger';

const resetable = reducer => (state, action) => {
  if (action.type === 'simple-messenger/reset') {
    return reducer(undefined, action);
  }

  return reducer(state, action);
};

export default combineReducers({
  auth: resetable(auth),
  chat: resetable(chat),
  createChat: resetable(createChat),
  messenger: resetable(messenger),
  data: resetable(dataReducer),
  routing: routerReducer,
});
