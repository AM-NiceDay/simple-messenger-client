import { FETCH_CHAT_MESSAGES_SUCCESS } from './actions';

const initialState = {
  messagesIds: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAT_MESSAGES_SUCCESS:
      return {
        ...state,
        messagesIds: action.payload.map(message => message._id),
      };
    default:
      return state;
  }
}
