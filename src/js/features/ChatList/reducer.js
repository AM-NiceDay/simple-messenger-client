import { handle } from 'redux-pack';
import { FETCH_CHATS } from './actions';

const initialState = {
  chatIds: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHATS:
      return handle(state, action, {
        success: () => ({
          ...state,
          chatIds: action.payload.map(chat => chat._id),
        }),
      });
    default:
      return state;
  }
};
