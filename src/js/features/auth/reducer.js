import {
  SIGN_IN_SUCCESS,
  SIGN_UP_SUCCESS
} from './actions';

const initialState = {
  user: {},
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
      };
    default:
      return state;
  }
};
