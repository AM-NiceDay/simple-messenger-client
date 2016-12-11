import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import api from '../../modules/api';
import { pushItems } from '../../modules/data';
import { FETCH_USERS, fetchUsersSuccess } from './actions';

function* fetchUsersSaga() {
  const users = yield api.users.getUsers();
  yield put(pushItems('users', users));
  yield put(fetchUsersSuccess(users));
}

export default function* () {
  yield takeEvery(FETCH_USERS, fetchUsersSaga);
}
