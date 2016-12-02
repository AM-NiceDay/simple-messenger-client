import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';

const SIGN_UP = 'auth/SIGN_UP';
const SIGN_UP_LOADING = 'auth/SIGN_UP_LOADING';
const SIGN_UP_SUCCESS = 'auth/SIGN_UP_SUCCESS';
const SIGN_UP_ERROR = 'auth/SIGN_UP_ERROR';

export const signUp = (email, password) => ({ type: SIGN_UP, payload: { email, password } });
const signUpLoading = () => ({ type: SIGN_UP_LOADING});
const signUpSuccess = user => ({ type: SIGN_UP_SUCCESS, payload: user });
const signUpError = error => ({ type: SIGN_UP_ERROR, payload: error, error: true });

export function* authSaga() {
  console.log('here');
  yield takeEvery(SIGN_UP, signUpSaga);
}

function* signUpSaga({ payload }) {
  yield put(signUpLoading());

  try {
    const user = yield fetch('/api/v1/users', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json());

    yield put(signUpSuccess(user));
  } catch (e) {
    yield put(signUpError(e));
  }
}

export default (state = {}, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
};
