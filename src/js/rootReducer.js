import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as data } from './features/core/data';
import { reducer as auth } from './features/Auth';
import { reducer as chat } from './features/Chat';
import { reducer as chatList } from './features/ChatList';
import { reducer as createChat } from './features/CreateChat';

const resetable = reducer => (state, action) => {
  if (action.type === 'simple-messenger/reset') {
    return reducer(undefined, action);
  }

  return reducer(state, action);
};

export default combineReducers({
  data: resetable(data),
  auth: resetable(auth),
  chat: resetable(chat),
  chatList: resetable(chatList),
  createChat: resetable(createChat),
  routing: routerReducer,
});
