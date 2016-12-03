import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

const SIGN_UP = 'auth/SIGN_UP';
const SIGN_UP_LOADING = 'auth/SIGN_UP_LOADING';
const SIGN_UP_SUCCESS = 'auth/SIGN_UP_SUCCESS';
const SIGN_UP_ERROR = 'auth/SIGN_UP_ERROR';
const SIGN_IN = 'auth/SIGN_IN';
const SIGN_IN_LOADING = 'auth/SIGN_IN_LOADING';
const SIGN_IN_SUCCESS = 'auth/SIGN_IN_SUCCESS';
const SIGN_IN_ERROR = 'auth/SIGN_IN_ERROR';

export const signUp = (email, password) => ({ type: SIGN_UP, payload: { email, password } });
const signUpLoading = () => ({ type: SIGN_UP_LOADING});
const signUpSuccess = user => ({ type: SIGN_UP_SUCCESS, payload: user });
const signUpError = error => ({ type: SIGN_UP_ERROR, payload: error, error: true });
export const signIn = (email, password) => ({ type: SIGN_IN, payload: { email, password } });
const signInLoading = () => ({ type: SIGN_IN_LOADING});
const signInSuccess = user => ({ type: SIGN_IN_SUCCESS, payload: user });
const signInError = error => ({ type: SIGN_IN_ERROR, payload: error, error: true });


export function* authSaga() {
  yield takeEvery(SIGN_UP, signUpSaga);
  yield takeEvery(SIGN_IN, signInSaga);
}

function* signUpSaga({ payload }) {
  yield put(signUpLoading());

  try {
    const user = yield fetch('/api/v1/users', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json());

    yield put(signUpSuccess(user));
    yield signInSaga({ payload });
  } catch (e) {
    yield put(signUpError(e));
  }
}

function* signInSaga({ payload }) {
  yield put(signInLoading());

  try {
    const user = yield fetch('/api/v1/auth', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json());

    yield put(signInSuccess(user));
    yield put(push('/'));
  } catch (e) {
    yield put(signInError(e));
  }
}

export default (state = {}, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state;
  }
};
