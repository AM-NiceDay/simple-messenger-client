import first from 'lodash/fp/first';
import reverse from 'lodash/fp/reverse';
import sortBy from 'lodash/fp/sortBy';

export const getChats = (state, chatIds) => chatIds.map(chatId => state.data.chats[chatId]);

export const getChatMessageIds = (state, chatId) => state.data.chatsMessages[chatId] || [];
export const getChatMessages = (state, chatId) => getMessages(state, getChatMessageIds(state, chatId));
export const getChatLatestMessage = (state, chatId) => first(reverse(sortBy('created', getChatMessages(state, chatId))));

export const getMessages = (state, messagesIds) => messagesIds.map(messageId => state.data.messages[messageId]);
export const getUser = (state, userId) => state.data.users[userId];
export const getUsers = (state, userIds) => userIds.map(userId => state.data.users[userId]);
