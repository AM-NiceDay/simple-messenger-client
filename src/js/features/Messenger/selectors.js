import { getItems } from '../../modules/data';

export const getChats = state => getItems(state, 'chats', state.messenger.chatIds)
