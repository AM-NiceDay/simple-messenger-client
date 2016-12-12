export const SIGN_IN = 'auth/SIGN_IN';
export const SIGN_IN_LOADING = 'auth/SIGN_IN_LOADING';
export const SIGN_IN_SUCCESS = 'auth/SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'auth/SIGN_IN_ERROR';
export const signIn = (email, password) => ({ type: SIGN_IN, payload: { email, password } });
export const signInLoading = () => ({ type: SIGN_IN_LOADING});
export const signInSuccess = user => ({ type: SIGN_IN_SUCCESS, payload: user });
export const signInError = error => ({ type: SIGN_IN_ERROR, payload: error, error: true });

export const SIGN_UP = 'auth/SIGN_UP';
export const SIGN_UP_LOADING = 'auth/SIGN_UP_LOADING';
export const SIGN_UP_SUCCESS = 'auth/SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'auth/SIGN_UP_ERROR';
export const signUp = (email, password) => ({ type: SIGN_UP, payload: { email, password } });
export const signUpLoading = () => ({ type: SIGN_UP_LOADING});
export const signUpSuccess = user => ({ type: SIGN_UP_SUCCESS, payload: user });
export const signUpError = error => ({ type: SIGN_UP_ERROR, payload: error, error: true });
