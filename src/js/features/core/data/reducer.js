import keyBy from 'lodash/keyBy';
import uniq from 'lodash/fp/uniq';
import { LOAD_CHATS, LOAD_CHAT_MESSAGES, LOAD_MESSAGES, LOAD_USERS } from './actions';

const initialState = {
  chats: {},
  chatsMessages: {},
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
    case LOAD_CHAT_MESSAGES:
      return {
        ...state,
        chatsMessages: {
          ...state.chatsMessages,
          [action.payload.chatId]: uniq([
            ...(state.chatsMessages[action.payload.chatId] || []),
            ...(action.payload.messageIds || []),
          ]),
        },
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
