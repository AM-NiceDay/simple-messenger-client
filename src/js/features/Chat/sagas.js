import { takeEvery } from 'redux-saga';
import { put, select } from 'redux-saga/effects';
import api from '../../modules/api';
import { pushItem, pushItems } from '../../modules/data';
import { getItem } from '../../modules/data';
import {
  FETCH_CHAT_MESSAGES,
  fetchChatMessagesSuccess,
  POST_CHAT_MESSAGE,
  postChatMessageSuccess,
} from './actions';

function* fetchChatMessagesSaga({ payload }) {
  const chatId = payload;
  const { messages, chats, users } = yield api.chat.getChatMessages(chatId);

  yield put(pushItems('chats', chats));
  yield put(pushItems('users', users));
  yield put(pushItems('messages', messages));
  yield put(pushItem('chatMetas', {
    _id: chatId,
    messageIds: messages.map(message => message._id),
  }));
  yield put(fetchChatMessagesSuccess(messages));
}

function* postChatMessageSaga({ payload }) {
  const { chatId, text } = payload;
  const message = yield api.chat.postChatMessage({ chatId, text });

  yield put(pushItem('messages', message));
  const chatMeta = yield select(state => getItem(state, 'chatMetas', chatId));
  yield put(pushItem('chatMetas', {
    ...chatMeta,
    messageIds: [
      ...chatMeta.messageIds,
      message._id,
    ],
  }))
  yield put(postChatMessageSuccess(message));
}

export default function* chatSaga() {
  yield takeEvery(FETCH_CHAT_MESSAGES, fetchChatMessagesSaga);
  yield takeEvery(POST_CHAT_MESSAGE, postChatMessageSaga);
}
