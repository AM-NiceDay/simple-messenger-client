import { takeEvery } from 'redux-saga';
import { put, select } from 'redux-saga/effects';

const FETCH_CHATS = 'messenger/FETCH_CHATS';
const FETCH_CHATS_SUCCESS = 'messenger/FETCH_CHATS_SUCCESS';

export const fetchChats = () => ({ type: FETCH_CHATS });
const fetchChatsSuccess = (chats) => ({ type: FETCH_CHATS_SUCCESS, payload: chats });

export function* messengerSaga() {
  yield takeEvery(FETCH_CHATS, fetchChatsSaga);
}

function* fetchChatsSaga () {
  const user = yield select(store => store.auth.user);

  const chats = yield fetch('/api/v1/chats', {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then(response => response.json());

  yield put(fetchChatsSuccess(chats));
}

const initialState = {
  chats: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHATS_SUCCESS:
      return {
        ...state,
        chats: action.payload,
      };
      default:
        return state;
  }
}
