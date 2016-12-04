import keyBy from 'lodash/keyBy';
import { PUSH_ITEM, PUSH_ITEMS } from './actions';

export default (state = {}, action) => {
  switch (action.type) {
    case PUSH_ITEM:
      return {
        ...state,
        [action.meta.collection]: {
          ...state[action.meta.collection],
          [action.payload.id]: action.payload,
        },
      };
    case PUSH_ITEMS:
      return {
        ...state,
        [action.meta.collection]: {
          ...state[action.meta.collection],
          ...keyBy(action.payload, 'id'),
        },
      };
    default:
      return state;
  }
};
