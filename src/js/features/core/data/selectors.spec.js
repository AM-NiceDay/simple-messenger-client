import { getChatMessages } from './selectors';

describe('core/data selectores', () => {
  describe('#getChatMessages', () => {
    it('returns specified chat messages', () => {
      const state = {
        data: {
          chatsMessages: {
            '123': ['1', '2', '3'],
          },
        },
      };
      const chatMessages = getChatMessages(state, '123');

      expect(chatMessages).toEqual(['1', '2', '3']);
    });

    it('returns empty array if chat messages does not exist', () => {
      const state = {
        data: {
          chatsMessages: {},
        },
      };
      const chatMessages = getChatMessages(state, '123');

      expect(chatMessages).toEqual([]);
    });
  });
});
