import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import api from '../../modules/api';
import {
  SIGN_IN,
  signInLoading,
  signInSuccess,
  signInError,
  SIGN_UP,
  signUpLoading,
  signUpSuccess,
  signUpError,
} from './actions';

function* signInSaga({ payload }) {
  yield put(signInLoading());

  try {
    const user = yield api.auth.signIn({ email: payload.email, password: payload.password });
    yield put(signInSuccess(user));
    yield put(push('/'));
  } catch (e) {
    yield put(signInError(e));
  }
}

function* signUpSaga({ payload }) {
  yield put(signUpLoading());

  try {
    const user = yield api.auth.createUser({ email: payload.email, password: payload.password });
    yield put(signUpSuccess(user));
    yield signInSaga({ payload });
  } catch (e) {
    yield put(signUpError(e));
  }
}

export default function* authSaga() {
  yield takeEvery(SIGN_UP, signUpSaga);
  yield takeEvery(SIGN_IN, signInSaga);
}
