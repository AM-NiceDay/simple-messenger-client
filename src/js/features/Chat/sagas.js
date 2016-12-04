import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import api from '../../modules/api';
import { pushItems } from '../../modules/data';
import { FETCH_CHAT_MESSAGES, fetchChatMessagesSuccess } from './actions';

function* fetchChatMessagesSaga({ payload }) {
  const chatId = payload;
  const messages = yield api.chat.getChatMessages(chatId);

  yield put(pushItems('messages', messages));
  yield put(fetchChatMessagesSuccess(messages));
}

export default function* chatSaga() {
  yield takeEvery(FETCH_CHAT_MESSAGES, fetchChatMessagesSaga);
}
