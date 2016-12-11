import { getItems } from '../../modules/data';

export const getUsers = state => getItems(state, 'users', state.createChat.userIds);
