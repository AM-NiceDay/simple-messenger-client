import { fork } from 'redux-saga/effects';
import { saga as auth } from './features/Auth';
import { saga as chat } from './features/Chat';
import { saga as chatList } from './features/ChatList';
import { saga as createChat } from './features/CreateChat';

export default function* () {
  yield fork(auth);
  yield fork(chat);
  yield fork(chatList);
  yield fork(createChat);
}
