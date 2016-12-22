import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import api from '../core/api';
import { loadChats, loadChatsMessages, loadMessages, loadUsers } from '../core/data';
import { FETCH_CHATS, fetchChatsLoading, fetchChatsSuccess } from './actions';

export function* loadData({ chats, messages, users }) {
  yield put(loadChats(chats));
  yield put(loadChatsMessages(chats.map(chat => ({
    chatId: chat._id,
    messageIds: chat.lastMessageId ? [chat.lastMessageId] : undefined,
  }))));
  yield put(loadMessages(messages));
  yield put(loadUsers(users));
}

export function* fetchChatsSaga() {
  yield put(fetchChatsLoading());

  const { chats, messages, users } = yield call(api.chats.getChats);
  yield call(loadData, { chats, messages, users });
  yield put(fetchChatsSuccess(chats));
}

export default function* () {
  yield takeEvery(FETCH_CHATS, fetchChatsSaga);
}
