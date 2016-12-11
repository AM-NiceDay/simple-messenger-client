import {
  SIGN_IN_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
} from './actions';

const initialState = {
  user: {},
  signUpErrors: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      }
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        signUpErrors: {},
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        signUpErrors: action.payload,
      };
    default:
      return state;
  }
};
