import { call, put } from 'redux-saga/effects';
import { loadChats, loadChatMessages, loadMessages, loadUsers } from '../core/data';
import api from '../core/api';
import { loadData, fetchChatMessagesSaga, postChatMessageSaga, updateChatLastReadSaga } from './sagas';
import { fetchChatMessagesSuccess } from './actions';

describe('Chat sagas', () => {
  describe('#loadData', () => {
    it('loads data', () => {
      const data = {
        chatId: 'c1',
        chats: [{ _id: 'c1' }],
        messages: [{ _id: 'm1' }, { _id: 'm2' }, { _id: 'm3' }],
        users: [{ _id: 'u1' }, { _id: 'u2' }],
      }
      const gen = loadData(data);

      expect(gen.next().value).toEqual(
        put(loadChats([{ _id: 'c1' }]))
      );
      expect(gen.next().value).toEqual(
        put(loadMessages([{ _id: 'm1' }, { _id: 'm2' }, { _id: 'm3' }]))
      );
      expect(gen.next().value).toEqual(
        put(loadUsers([{ _id: 'u1' }, { _id: 'u2' }]))
      );
      expect(gen.next().value).toEqual(
        put(loadChatMessages({
          chatId: 'c1',
          messageIds: ['m1', 'm2', 'm3'],
        }))
      );
      expect(gen.next().done).toEqual(true);
    });
  });

  describe('#fetchChatMessagesSaga', () => {
    it('fetches chat messages', () => {
      const chatId = 'c1';
      const apiResponse = {
        chats: [{ _id: 'c1' }],
        messages: [{ _id: 'm1' }, { _id: 'm2' }, { _id: 'm3' }],
        users: [{ _id: 'u1' }, { _id: 'u2' }],
      };
      const gen = fetchChatMessagesSaga({ payload: chatId });

      expect(gen.next().value).toEqual(
        call(api.messages.getChatMessages, 'c1')
      );
      expect(gen.next(apiResponse).value).toEqual(
        call(loadData, {
          chatId: 'c1',
          chats: [{ _id: 'c1' }],
          messages: [{ _id: 'm1' }, { _id: 'm2' }, { _id: 'm3' }],
          users: [{ _id: 'u1' }, { _id: 'u2' }],
        })
      );
      expect(gen.next().done).toEqual(true);
    });
  });

  describe('#postChatMessageSaga', () => {
    it('posts chat message', () => {
      const gen = postChatMessageSaga({ payload: { chatId: 'c1', text: 'Message text' } });

      expect(gen.next().value).toEqual(
        call(api.messages.postChatMessage, { chatId: 'c1', text: 'Message text' }),
      );
      expect(gen.next({ _id: 'm1' }).value).toEqual(
        put(loadMessages([{ _id: 'm1' }]))
      );
      expect(gen.next().value).toEqual(
        put(loadChatMessages({
          chatId: 'c1',
          messageIds: ['m1'],
        }))
      );
    });
  });

  describe('#updateChatLastReadSaga', () => {
    it('updates chat lastRead', () => {
      const date = new Date();
      const gen = updateChatLastReadSaga({ payload: { chatId: 'c1', lastReadDate: date } });

      expect(gen.next().value).toEqual(
        call(api.chats.updateChatLastRead, { chatId: 'c1', lastRead: date.toISOString() })
      );
      expect(gen.next({ _id: 'c1' }).value).toEqual(
        put(loadChats([{ _id: 'c1' }]))
      );
      expect(gen.next().done).toEqual(true);
    });
  })
});
