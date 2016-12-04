export const FETCH_CHATS = 'messenger/FETCH_CHATS';
export const FETCH_CHATS_SUCCESS = 'messenger/FETCH_CHATS_SUCCESS';

export const fetchChats = () => ({ type: FETCH_CHATS });
export const fetchChatsSuccess = (chats) => ({ type: FETCH_CHATS_SUCCESS, payload: chats });
