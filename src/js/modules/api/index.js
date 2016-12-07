let api = {};

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
    }
  })
    .then(response => response.json()),
}

api = {
  messenger: messengerApi,
  chat: chatApi,
};

api.initialize = store => api.store = store;

export default api;
