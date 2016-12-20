import { loadChatMessages } from './actions';
import reducer from './reducer';

describe('core/data reducer', () => {
  describe('LOAD_CHAT_MESSAGES handler', () => {
    it('loads all message ids if chat messages haven\'t existed', () => {
      const state = {
        chatsMessages: {},
      };
      const action = loadChatMessages({ chatId: '123', messageIds: ['1', '2', '3']});
      const nextState = reducer(state, action);

      expect(nextState).toEqual({
        chatsMessages: {
          123: ['1', '2', '3'],
        },
      });
    });

    it('adds message ids to existed without duplicates if chat messages already exist', () => {
      const state = {
        chatsMessages: {
          123: ['1', '2'],
        },
      };
      const action = loadChatMessages({ chatId: '123', messageIds: ['2', '3', '4'] });
      const nextState = reducer(state, action);

      expect(nextState).toEqual({
        chatsMessages: {
          123: ['1', '2', '3', '4'],
        },
      });
    });

    it('creates empty array if message ids is not specified', () => {
      const state = {
        chatsMessages: {},
      };
      const action = loadChatMessages({ chatId: '123', messageIds: undefined });
      const nextState = reducer(state, action);

      expect(nextState).toEqual({
        chatsMessages: {
          '123': [],
        },
      });
    });
  });
});
