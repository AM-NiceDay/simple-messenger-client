import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import api from '../core/api';
import { loadChats, loadChatMessages, loadMessages, loadUsers } from '../core/data';
import {
  FETCH_CHAT_MESSAGES,
  POST_CHAT_MESSAGE,
} from './actions';

export function* loadData({ chatId, chats, messages, users }) {
  yield put(loadChats(chats));
  yield put(loadMessages(messages));
  yield put(loadUsers(users));
  yield put(loadChatMessages({
    chatId,
    messageIds: messages.map(message => message._id),
  }));
}

export function* fetchChatMessagesSaga({ payload: chatId }) {
  const { chats, messages, users } = yield call(api.messages.getChatMessages, chatId);
  yield call(loadData, { chatId, chats, messages, users });
}


export function* postChatMessageSaga({ payload: { chatId, text } }) {
  const message = yield call(api.messages.postChatMessage, { chatId, text });

  if (message) {
    yield put(loadMessages([message]))
    yield put(loadChatMessages({
      chatId,
      messageIds: [message._id],
    }));
  }
}

export default function* chatSaga() {
  yield takeEvery(FETCH_CHAT_MESSAGES, fetchChatMessagesSaga);
  yield takeEvery(POST_CHAT_MESSAGE, postChatMessageSaga);
}
