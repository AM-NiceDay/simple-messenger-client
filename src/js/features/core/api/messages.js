export default apiFetch => ({
  getChatMessages: chatId => apiFetch(`/api/v1/chats/${chatId}/messages`),
  postChatMessage: ({ chatId, text }) => apiFetch(`/api/v1/chats/${chatId}/messages`, {
    method: 'POST',
    body: JSON.stringify({ text }),
  }),
});
