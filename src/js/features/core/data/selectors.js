export const getChats = (state, chatIds) => chatIds.map(chatId => state.data.chats[chatId]);
export const getChatMessages = (state, chatId) => state.data.chatsMessages[chatId] || [];
export const getMessages = (state, messagesIds) => messagesIds.map(messageId => state.data.messages[messageId]);
export const getUser = (state, userId) => state.data.users[userId];
export const getUsers = (state, userIds) => userIds.map(userId => state.data.users[userId]);
