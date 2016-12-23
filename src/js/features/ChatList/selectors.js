import sortBy from 'lodash/fp/sortBy';
import reverse from 'lodash/fp/reverse';
import { getChats, getChatLatestMessage, getUser } from '../core/data';

export const getChatListChats = state => {
  return reverse(sortBy(
    chat => chat.lastMessage && chat.lastMessage.created,
    getChats(state, state.chatList.chatIds)
      .map(chat => ({
        ...chat,
        peer: getUser(state, chat.peerId),
        lastMessage: getChatLatestMessage(state, chat._id),
      }))
  ));
};
