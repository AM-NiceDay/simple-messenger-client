import keyBy from 'lodash/keyBy';
import { LOAD_CHATS, LOAD_MESSAGES, LOAD_USERS } from './actions';

const initialState = {
  chats: {},
  messages: {},
  users: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CHATS:
      return {
        ...state,
        chats: {
          ...state.chats,
          ...keyBy(action.payload, '_id'),
        }
      };
    case LOAD_MESSAGES:
      return {
        ...state,
        messages: {
          ...state.messages,
          ...keyBy(action.payload, '_id'),
        }
      };
    case LOAD_USERS:
      return {
        ...state,
        users: {
          ...state.users,
          ...keyBy(action.payload, '_id'),
        }
      };
    default:
      return state;
  }
};
