import { FETCH_CHATS_SUCCESS } from './actions';

const initialState = {
  chatIds: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHATS_SUCCESS:
      return {
        ...state,
        chatIds: action.payload.map(chat => chat._id),
      };
      default:
        return state;
  }
};
