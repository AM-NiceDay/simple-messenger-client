import { fork } from 'redux-saga/effects';
import { authSaga } from './features/auth/duck';
import { saga as chat } from './features/Chat';
import { messengerSaga } from './features/Messenger/duck';

export default function* () {
  yield fork(authSaga);
  yield fork(chat);
  yield fork(messengerSaga);
}
