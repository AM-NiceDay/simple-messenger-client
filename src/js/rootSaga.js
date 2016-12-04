import { fork } from 'redux-saga/effects';
import { authSaga } from './features/auth/duck';
import { chatSaga } from './features/Chat/duck';
import { messengerSaga } from './features/Messenger/duck';

export default function* () {
  yield fork(authSaga);
  yield fork(chatSaga);
  yield fork(messengerSaga);
}
