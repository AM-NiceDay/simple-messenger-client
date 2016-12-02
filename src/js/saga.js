import { fork } from 'redux-saga/effects';
import { authSaga } from './auth/duck';

export default function* () {
  yield fork(authSaga);
}
