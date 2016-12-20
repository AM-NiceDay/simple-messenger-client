export const LOAD_CHATS = 'data/LOAD_CHATS';
export const loadChats = chats => ({
  type: LOAD_CHATS,
  payload: chats,
});

export const LOAD_MESSAGES = 'data/LOAD_MESSAGES';
export const loadMessages = messages => ({
  type: LOAD_MESSAGES,
  payload: messages,
});

export const LOAD_USERS = 'data/LOAD_USERS';
export const loadUsers = users => ({
  type: LOAD_USERS,
  payload: users,
});
