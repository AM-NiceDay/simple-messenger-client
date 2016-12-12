let api = {};

const handleResponse = response =>
  response.json()
    .then(data => {
      if (response.status >= 200 && response.status < 300) {
        return data;
      }

      return Promise.reject(data);
    });

const fetchWithHandler = (url, options) =>
  fetch(url, options)
    .then(handleResponse);

const authApi = {
  signIn: ({ email, password }) => fetch('/api/v1/auth', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json()),
  createUser: ({ email, password }) => fetchWithHandler('/api/v1/users', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  }),
};

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
};

const createChatApi = {
  byId: ({ peerId }) => fetchWithHandler('/api/v1/chats', {
    method: 'POST',
    body: JSON.stringify({ peerId }),
    headers: {
      Authorization: `Bearer ${api.store.getState().auth.user.token}`,
      'Content-Type': 'application/json',
    },
  }),
  byEmail: ({ email }) => fetchWithHandler('/api/v1/chatsByEmail', {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: {
      Authorization: `Bearer ${api.store.getState().auth.user.token}`,
      'Content-Type': 'application/json',
    },
  }),
};

const usersApi = {
  getUsers: () => fetchWithHandler('/api/v1/users/search', {
    headers: {
      Authorization: `Bearer ${api.store.getState().auth.user.token}`,
    },
  }),
};

api = {
  auth: authApi,
  messenger: messengerApi,
  chat: chatApi,
  createChat: createChatApi,
  users: usersApi,
};

api.initialize = store => api.store = store;

export default api;
