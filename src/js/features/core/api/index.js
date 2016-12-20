import { selectors as authSelectors } from '../../Auth';
import chats from './chats';

const handleResponse = response =>
  response.json()
    .then(data => response.status >= 200 && response.status < 300 ? data : Promise.reject(data));

export const apiFetch = (url, options) =>
  fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${authSelectors.getAuthToken()}`,
      'Content-Type': 'application/json',
      ...options && options.headers,
    },
  })
    .then(handleResponse);

export default {
  chats: chats(apiFetch),
};
