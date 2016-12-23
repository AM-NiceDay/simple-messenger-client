import {
  getPopulatedChat,
  getChatMessages,
  getPopulatedChatMessages,
  getChatLatestMessage,
} from './selectors';

describe('core/data selectors', () => {
  describe('#getPopulatedChat', () => {
    it('returns populated chat', () => {
      const chatId = 'c1';
      const state = {
        data: {
          chats: {
            c1: { _id: 'c1', peerId: 'u1' },
          },
          chatsMessages: {
            c1: ['m1', 'm2'],
          },
          messages: {
            m1: { _id: 'm1', created: '2016-12-11T18:18:50.172Z' },
            m2: { _id: 'm2', created: '2016-12-11T18:18:53.172Z' },
          },
          users: {
            u1: { _id: 'u1' },
          },
        },
      };

      const populatedChat = getPopulatedChat(state, chatId);

      expect(populatedChat).toEqual({
        _id: 'c1',
        peerId: 'u1',
        peer: { _id: 'u1' },
        lastMessage: { _id: 'm2', created: '2016-12-11T18:18:53.172Z' }
      });
    });

    it('does not contain lastMessage if there are no chatMessages', () => {
      const chatId = 'c1';
      const state = {
        data: {
          chats: {
            c1: { _id: 'c1', peerId: 'u1' },
          },
          chatsMessages: {},
          users: {
            u1: { _id: 'u1' },
          },
        },
      };

      const populatedChats = getPopulatedChat(state, chatId);

      expect(populatedChats).toEqual({
        _id: 'c1',
        peerId: 'u1',
        peer: { _id: 'u1' },
      });
    });
  });

  describe('#getChatMessages', () => {
    it('returns specified chat messages', () => {
      const state = {
        data: {
          chatsMessages: {
            'c1': ['m1', 'm2', 'm3'],
          },
          messages: {
            m1: { _id: 'm1' },
            m2: { _id: 'm2' },
            m3: { _id: 'm3' },
          },
        },
      };
      const chatMessages = getChatMessages(state, 'c1');

      expect(chatMessages).toEqual([
        { _id: 'm1' },
        { _id: 'm2' },
        { _id: 'm3' },
      ]);
    });

    it('returns empty array if chat messages does not exist', () => {
      const state = {
        data: {
          chatsMessages: {},
        },
      };
      const chatMessages = getChatMessages(state, 'c1');

      expect(chatMessages).toEqual([]);
    });
  });

  describe('#getPopulatedChatMessages', () => {
    it('returns populated chat messages', () => {
      const chatId = 'c1';
      const state = {
        data: {
          chatsMessages: {
            'c1': ['m1', 'm2', 'm3'],
          },
          messages: {
            m1: { _id: 'm1', userId: 'u1' },
            m2: { _id: 'm2', userId: 'u2' },
            m3: { _id: 'm3', userId: 'u1' },
          },
          users: {
            u1: { _id: 'u1' },
            u2: { _id: 'u2' },
          }
        },
      };
      const populatedChatMessages = getPopulatedChatMessages(state, chatId);

      expect(populatedChatMessages).toEqual([
        { _id: 'm1', userId: 'u1', user: { _id: 'u1' } },
        { _id: 'm2', userId: 'u2', user: { _id: 'u2' } },
        { _id: 'm3', userId: 'u1', user: { _id: 'u1' } },
      ]);
    });
  });

  describe('#getChatLatestMessage', () => {
    it('returns latest chat message', () => {
      const state = {
        data: {
          chatsMessages: {
            c1: ['m1', 'm2'],
            c2: ['m3', 'm4'],
          },
          messages: {
            m1: { _id: 'm1', created: '2000-01-01T00:00:01.000Z' },
            m2: { _id: 'm2', created: '2000-01-01T00:00:00.000Z' },
            m3: { _id: 'm3', created: '2000-01-01T00:00:00.000Z' },
            m4: { _id: 'm4', created: '2000-01-01T00:00:01.000Z' },
          },
        },
      };

      expect(getChatLatestMessage(state, 'c1')._id).toEqual('m1');
      expect(getChatLatestMessage(state, 'c2')._id).toEqual('m4');
      expect(getChatLatestMessage(state, 'c3')).toEqual(undefined);
    });
  });
});
