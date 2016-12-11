import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import api from '../../modules/api';
import { pushItems } from '../../modules/data';
import { FETCH_USERS, fetchUsersSuccess, CREATE_CHAT } from './actions';
import { actions as messengerActions } from '../Messenger';

function* fetchUsersSaga() {
  const users = yield api.users.getUsers();
  yield put(pushItems('users', users));
  yield put(fetchUsersSuccess(users));
}

function* createChatSaga({ payload }) {
  yield api.createChat.byId({ peerId: payload });
  yield put(messengerActions.fetchChats());
  yield put(push(`/messenger`));
}

export default function* () {
  yield takeEvery(FETCH_USERS, fetchUsersSaga);
  yield takeEvery(CREATE_CHAT, createChatSaga);
}
