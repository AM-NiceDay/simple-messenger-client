import { fork } from 'redux-saga/effects';
import { authSaga } from './auth/duck';
import { chatSaga } from './Chat/duck';
import { messengerSaga } from './Messenger/duck';

export default function* () {
  yield fork(authSaga);
  yield fork(chatSaga);
  yield fork(messengerSaga);
}
