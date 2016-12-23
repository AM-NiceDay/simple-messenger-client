export default apiFetch => ({
  getChatMessages: chatId => apiFetch(`/api/v1/chats/${chatId}/messages`),
});
