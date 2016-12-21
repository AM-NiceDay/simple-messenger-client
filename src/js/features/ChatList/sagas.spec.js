import { put, call } from 'redux-saga/effects';
import api from '../core/api';
import { fetchChatsSaga } from './sagas';
import { FETCH_CHATS, fetchChatsLoading, fetchChatsSuccess } from './actions';
import { loadChats, loadMessages, loadChatsMessages, loadUsers } from '../core/data';

describe('ChatList sagas', () => {
  describe('#fetchChatsSaga', () => {
    it('works correctly', () => {
      const gen = fetchChatsSaga();
      const apiResponse = {
        chats: [
          { _id: 'c1', userIds: ['u1', 'u2'], lastMessageId: 'm1' },
          { _id: 'c2', userIds: ['u1', 'u3'], lastMessageId: 'm2' },
        ],
        users: [
          { _id: 'u1' },
          { _id: 'u2' },
          { _id: 'u3' },
        ],
        messages: [
          { _id: 'm1' },
          { _id: 'm2' },
        ],
      };

      expect(gen.next().value).toEqual(
        put(fetchChatsLoading())
      );
      expect(gen.next().value).toEqual(
        call(api.chats.getChats)
      );
      expect(gen.next(apiResponse).value).toEqual(
        put(loadChats([
          { _id: 'c1', userIds: ['u1', 'u2'], lastMessageId: 'm1' },
          { _id: 'c2', userIds: ['u1', 'u3'], lastMessageId: 'm2' },
        ]))
      );
      expect(gen.next().value).toEqual(
        put(loadChatsMessages([
          { chatId: 'c1', messageIds: ['m1'] },
          { chatId: 'c2', messageIds: ['m2'] },
        ]))
      );
      expect(gen.next().value).toEqual(
        put(loadMessages([
          { _id: 'm1' },
          { _id: 'm2' },
        ]))
      );
      expect(gen.next().value).toEqual(
        put(loadUsers([
          { _id: 'u1' },
          { _id: 'u2' },
          { _id: 'u3' },
        ]))
      );
      expect(gen.next().value).toEqual(
        put(fetchChatsSuccess([
            { _id: 'c1', userIds: ['u1', 'u2'], lastMessageId: 'm1' },
            { _id: 'c2', userIds: ['u1', 'u3'], lastMessageId: 'm2' },
        ]))
      );
      expect(gen.next().done).toEqual(true);
    });
  });
});
