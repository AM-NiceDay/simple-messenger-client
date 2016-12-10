import { fork } from 'redux-saga/effects';
import { saga as auth } from './features/Auth';
import { saga as chat } from './features/Chat';
import { saga as messenger } from './features/Messenger';

export default function* () {
  yield fork(auth);
  yield fork(chat);
  yield fork(messenger);
}
