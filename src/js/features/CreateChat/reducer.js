import { FETCH_USERS_SUCCESS } from './actions';

const initialState = {
  userIds: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        userIds: action.payload.map(user => user._id),
      };
    default:
      return state;
  }
};
