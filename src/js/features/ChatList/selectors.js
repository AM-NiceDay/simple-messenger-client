import { getChats, getChatLatestMessage, getUser } from '../core/data';

export const getChatListChats = state => {
  return getChats(state, state.chatList.chatIds)
    .map(chat => ({
      ...chat,
      peer: getUser(state, chat.peerId),
      lastMessage: getChatLatestMessage(state, chat._id),
    }));
};
