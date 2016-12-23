export default apiFetch => ({
  getChats: () => apiFetch('/api/v1/chats'),
  updateChatLastRead: ({ chatId, lastRead }) => apiFetch(`/api/v1/chats/${chatId}/lastRead`, {
    method: 'PUT',
    body: JSON.stringify({ lastRead }),
  }),
});
