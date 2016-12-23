import first from 'lodash/fp/first';
import reverse from 'lodash/fp/reverse';
import sortBy from 'lodash/fp/sortBy';

export const getMessages = (state, messagesIds) => messagesIds.map(messageId => state.data.messages[messageId]);

export const getUser = (state, userId) => state.data.users[userId];
export const getUsers = (state, userIds) => userIds.map(userId => state.data.users[userId]);

export const getChatMessageIds = (state, chatId) => state.data.chatsMessages[chatId] || [];
export const getChatMessages = (state, chatId) => getMessages(state, getChatMessageIds(state, chatId));
export const getPopulatedChatMessages = (state, chatId) => getChatMessages(state, chatId)
  .map(message => ({
    ...message,
    user: getUser(state, message.userId),
  }));
export const getChatLatestMessage = (state, chatId) => first(reverse(sortBy('created', getChatMessages(state, chatId))));

export const getChat = (state, chatId) => state.data.chats[chatId];
export const getPopulatedChat = (state, chatId) => {
  const chat = getChat(state, chatId);
  return {
    ...chat,
    peer: getUser(state, chat.peerId),
    lastMessage: getChatLatestMessage(state, chat._id),
  };
};
export const getChats = (state, chatIds) => chatIds.map(chatId => state.data.chats[chatId]);
