import { takeEvery } from 'redux-saga';
import { put, select } from 'redux-saga/effects';

const FETCH_CHAT_MESSAGES = 'FETCH_CHAT_MESSAGES';
const FETCH_CHAT_MESSAGES_SUCCESS = 'FETCH_CHAT_MESSAGES_SUCCESS';

export const fetchChatMessages = (chatId) => ({ type: FETCH_CHAT_MESSAGES, payload: chatId });
const fetchChatMessagesSuccess = (messages) => ({ type: FETCH_CHAT_MESSAGES_SUCCESS, payload: messages });

export function* chatSaga() {
  yield takeEvery(FETCH_CHAT_MESSAGES, fetchChatMessagesSaga);
}

function* fetchChatMessagesSaga({ payload }) {
  const chatId = payload;
  const user = yield select(state => state.auth.user);
  const messages = yield fetch(`/api/v1/chats/${chatId}/messages`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    }
  })
    .then(response => response.json());
  yield put(fetchChatMessagesSuccess(messages));
}
