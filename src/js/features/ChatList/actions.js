import api from '../core/api';
import { loadChats, loadMessages, loadUsers } from '../core/data';

export const FETCH_CHATS = 'chat-list/FETCH_CHATS';

export const fetchChats = () => dispatch => dispatch({
  type: FETCH_CHATS,
  promise: api.chats.getChats()
    .then(({ chats, users, messages }) => {
      dispatch(loadChats(chats));
      dispatch(loadMessages(messages));
      dispatch(loadUsers(users));

      return chats;
    }),
});
