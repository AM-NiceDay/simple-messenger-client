import { put, call } from 'redux-saga/effects';
import api from '../core/api';
import { fetchChatsSaga, loadData } from './sagas';
import { FETCH_CHATS, fetchChatsLoading, fetchChatsSuccess } from './actions';
import { loadChats, loadChatsMessages, loadMessages, loadUsers } from '../core/data';

describe('ChatList sagas', () => {
  describe('#loadData', () => {
    it('loads data', () => {
      const data = {
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
      const gen = loadData(data);

      expect(gen.next().value).toEqual(
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
    });
    it('loads chatMessages without messageIds if chat does not have lastMessageId', () => {
      const data = {
        chats: [{ _id: 'c1' }],
        messages: [],
        users: [],
      };
      const gen = loadData(data);

      expect(gen.next().value).toEqual(
        put(loadChats([{ _id: 'c1' }]))
      );
      expect(gen.next().value).toEqual(
        put(loadChatsMessages([{ chatId: 'c1' }]))
      );
      expect(gen.next().value).toEqual(
        put(loadMessages([]))
      );
      expect(gen.next().value).toEqual(
        put(loadUsers([]))
      )
    });
  });

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
        call(loadData, apiResponse)
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
