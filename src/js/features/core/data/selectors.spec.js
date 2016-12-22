import { getChatLatestMessage, getChatMessages } from './selectors';

describe('core/data selectors', () => {
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
