import { createSelector } from 'reselect';
import { getChats, getMessages, getUser } from '../core/data';

const getChatListChatIds = state => state.chatList.chatIds; // ['c1', 'c2', 'c3']
const getChatListChats = createSelector(
  getChatListChatIds,
  chatIds => chatIds.map(chatId => getChats())
);

export const getChatListChats = createSelector(
  [getChats, getMessages, getUser]
);

// export const getChatListChats = state => {
//   return getChats(state, state.chatList.chatIds)
//     .map(chat => ({
//       ...chat,
//       peer: getUser(state, chat.peerId),
//       // lastMessage: getMessages(state, getLastMessageId(state, chat._id)),
//     }));
// };
