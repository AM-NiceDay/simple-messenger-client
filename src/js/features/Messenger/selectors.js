import { getItem, getItems } from '../../modules/data';

const getLastMessageId = (state, chatId) => {
  const chatMessageIds = getItem(state, 'chatMetas', chatId).messageIds;
  return chatMessageIds[chatMessageIds.length - 1];
};

export const getChats = state => {
  const chats = getItems(state, 'chats', state.messenger.chatIds);
  const populatedChats = chats.map(chat => ({
    ...chat,
    users: getItems(state, 'users', chat.userIds),
    lastMessage: getItem(state, 'messages', getLastMessageId(state, chat._id)),
  }));

  return populatedChats;
}
