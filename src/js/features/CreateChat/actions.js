export const FETCH_USERS = 'create-chat/FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'create-chat/FETCH_USERS_SUCCESS';
export const fetchUsers = () => ({ type: FETCH_USERS });
export const fetchUsersSuccess = (users) => ({ type: FETCH_USERS_SUCCESS, payload: users });

export const CREATE_CHAT = 'create-chat/CREATE_CHAT';
export const createChat = (peerId) => ({ type: CREATE_CHAT, payload: peerId});
