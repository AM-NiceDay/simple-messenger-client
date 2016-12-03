import { fork } from 'redux-saga/effects';
import { authSaga } from './auth/duck';
import { messengerSaga } from './Messenger/duck';

export default function* () {
  yield fork(authSaga);
  yield fork(messengerSaga);
}
