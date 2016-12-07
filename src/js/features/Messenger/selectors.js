import { getItem, getItems } from '../../modules/data';

export const getChats = state => {
  const chats = getItems(state, 'chats', state.messenger.chatIds);
  const populatedChats = chats.map(chat => ({
    ...chat,
    users: getItems(state, 'users', chat.userIds),
    lastMessage: getItem(state, 'messages', chat.lastMessageId),
  }));

  return populatedChats;
}
