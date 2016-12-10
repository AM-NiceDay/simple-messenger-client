let api = {};

const authApi = {
  signIn: ({ email, password }) => fetch('/api/v1/auth', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json()),
  createUser: ({ email, password }) => fetch('/api/v1/users', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json()),
}

const messengerApi = {
  getChats: () => fetch('/api/v1/chats', {
    headers: {
      Authorization: `Bearer ${api.store.getState().auth.user.token}`,
    },
  })
    .then(response => response.json()),
};

const chatApi = {
  getChatMessages: chatId => fetch(`/api/v1/chats/${chatId}/messages`, {
    headers: {
      Authorization: `Bearer ${api.store.getState().auth.user.token}`,
    },
  })
    .then(response => response.json()),
  postChatMessage: ({ chatId, text }) => fetch(`/api/v1/chats/${chatId}/messages`, {
    method: 'POST',
    body: JSON.stringify({ text }),
    headers: {
      Authorization: `Bearer ${api.store.getState().auth.user.token}`,
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json()),
}

const createChatApi = {
  byEmail: ({ email }) => fetch('/api/v1/chatsByEmail', {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: {
      Authorization: `Bearer ${api.store.getState().auth.user.token}`,
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json()),
}

api = {
  auth: authApi,
  messenger: messengerApi,
  chat: chatApi,
  createChat: createChatApi,
};

api.initialize = store => api.store = store;

export default api;
