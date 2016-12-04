const api = {
  chat: {
    getChatMessages: chatId => fetch(`/api/v1/chats/${chatId}/messages`, {
      headers: {
        Authorization: `Bearer ${api.store.getState().auth.user.token}`,
      }
    })
      .then(response => response.json()),
  }
};

api.initialize = store => api.store = store;

export default api;
