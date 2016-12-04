import { fork } from 'redux-saga/effects';
import { authSaga } from './features/auth/duck';
import { saga as chat } from './features/Chat';
import { saga as messenger } from './features/Messenger';

export default function* () {
  yield fork(authSaga);
  yield fork(chat);
  yield fork(messenger);
}
