import { getChatListChats } from './selectors';

describe('ChatList selectors', () => {
  describe('#getChatListChats', () => {
    it('returns populated chats', () => {
      const state = {
        chatList: {
          chatIds: ['c1', 'c2', 'c3'],
        },
        data: {
          chats: {
            c1: { _id: 'c1', peerId: 'u1' },
            c2: { _id: 'c2', peerId: 'u2' },
            c3: { _id: 'c3', peerId: 'u3' },
          },
          chatsMessages: {
            c1: ['m1', 'm2'],
            c2: ['m3', 'm4'],
          },
          messages: {
            m1: { _id: 'm1', created: '2016-12-11T18:18:50.172Z' },
            m2: { _id: 'm2', created: '2016-12-11T18:18:53.172Z' },
            m3: { _id: 'm3', created: '2016-12-11T18:18:56.172Z' },
            m4: { _id: 'm4', created: '2016-12-11T18:18:51.172Z' },
          },
          users: {
            u1: { _id: 'u1' },
            u2: { _id: 'u2' },
            u3: { _id: 'u3' },
          },
        },
      };

      const chats = getChatListChats(state);

      expect(chats).toEqual(
        [
          { _id: 'c3', peerId: 'u3', peer: { _id: 'u3' } },
          { _id: 'c2', peerId: 'u2', peer: { _id: 'u2' }, lastMessage: { _id: 'm3', created: '2016-12-11T18:18:56.172Z' } },
          { _id: 'c1', peerId: 'u1', peer: { _id: 'u1' }, lastMessage: { _id: 'm2', created: '2016-12-11T18:18:53.172Z' } },
        ]
      );
    });
  });
});
