import { getChats, getMessages, getUser } from '../core/data';

export const getChatListChats = state => {
  return getChats(state, state.chatList.chatIds)
    .map(chat => ({
      ...chat,
      peer: getUser(state, chat.peerId),
      // lastMessage: getMessages(state, getLastMessageId(state, chat._id)),
    }));
}
