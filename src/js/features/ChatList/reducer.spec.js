import reducer from './reducer';
import { fetchChatsSuccess } from './actions';

describe('ChatList reducer', () => {
  describe('FETCH_CHATS_SUCCESS handler', () => {
    it('should work correctly', () => {
      const state = {};
      const action = fetchChatsSuccess([
        { _id: 'c1' },
        { _id: 'c2' },
        { _id: 'c3' },
      ]);
      const nextState = reducer(state, action);

      expect(nextState).toEqual({
        chatIds: ['c1', 'c2', 'c3'],
      });
    });
  });
});
