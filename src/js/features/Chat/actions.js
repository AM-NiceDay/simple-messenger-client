export const FETCH_CHAT_MESSAGES = 'chat/FETCH_CHAT_MESSAGES';
export const FETCH_CHAT_MESSAGES_SUCCESS = 'chat/FETCH_CHAT_MESSAGES_SUCCESS';
export const fetchChatMessages = (chatId) => ({ type: FETCH_CHAT_MESSAGES, payload: chatId });
export const fetchChatMessagesSuccess = (messages) => ({ type: FETCH_CHAT_MESSAGES_SUCCESS, payload: messages });

export const POST_CHAT_MESSAGE = 'chat/POST_CHAT_MESSAGE';
export const POST_CHAT_MESSAGE_SUCCESS = 'chat/POST_CHAT_MESSAGE_SUCCESS';
export const postChatMessage = ({ chatId, text }) => ({ type: POST_CHAT_MESSAGE, payload: { chatId, text } });
export const postChatMessageSuccess = (message) => ({ type: POST_CHAT_MESSAGE_SUCCESS, payload: message });

export const UPDATE_CHAT_LAST_READ = 'chat/UPDATE_CHAT_LAST_READ';
export const updateChatLastRead = ({ chatId, lastReadDate }) => ({ type: UPDATE_CHAT_LAST_READ, payload: { chatId, lastReadDate }});
