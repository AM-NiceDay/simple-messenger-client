import { loadChatMessages, loadChatsMessages } from './actions';
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

  describe('LOAD_CHATS_MESSAGES handler', () => {
    it('workds like LOAD_CHAT_MESSAGES for each item', () => {
      const state = {
        chatsMessages: {
          c2: ['m3', 'm4']
        },
      };
      const action = loadChatsMessages([
        { chatId: 'c1', messageIds: ['m1', 'm2']},
        { chatId: 'c2', messageIds: ['m4', 'm5']},
        { chatId: 'c3', messageIds: undefined },
      ]);
      const nextState = reducer(state, action);

      expect(nextState).toEqual({
        chatsMessages: {
          c1: ['m1', 'm2'],
          c2: ['m3', 'm4', 'm5'],
          c3: [],
        },
      });
    });
  });
});
