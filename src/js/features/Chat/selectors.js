import { getItems } from '../../modules/data';

export const getChatMessages = state => getItems(state, 'messages', state.chat.messageIds);
