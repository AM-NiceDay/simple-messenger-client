export default apiFetch => ({
  getChats: () => apiFetch('/api/v1/chats'),
});
