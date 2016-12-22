export const FETCH_CHATS = 'chat-list/FETCH_CHATS';
export const FETCH_CHATS_LOADING = 'chat-list/FETCH_CHATS_LOADING';
export const FETCH_CHATS_SUCCESS = 'chat-list/FETCH_CHATS_SUCCESS';
export const FETCH_CHATS_ERROR = 'chat-list/FETCH_CHATS_ERROR';
export const fetchChats = () => ({ type: FETCH_CHATS });
export const fetchChatsLoading = () => ({ type: FETCH_CHATS_LOADING });
export const fetchChatsSuccess = (chats) => ({ type: FETCH_CHATS_SUCCESS, payload: chats });
export const fetchChatsError = () => ({ type: FETCH_CHATS_ERROR });
