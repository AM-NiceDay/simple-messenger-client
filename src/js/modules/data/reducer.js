import keyBy from 'lodash/keyBy';
import startsWith from 'lodash/startsWith';
import { PUSH_ITEM, PUSH_ITEMS } from './actions';

export default (state = {}, action) => {
  if (startsWith(action.type, PUSH_ITEMS)) {
    return {
      ...state,
      [action.meta.collection]: {
        ...state[action.meta.collection],
        ...keyBy(action.payload, '_id'),
      },
    };
  }

  if (startsWith(action.type, PUSH_ITEM)) {
    return {
      ...state,
      [action.meta.collection]: {
        ...state[action.meta.collection],
        [action.payload.id]: action.payload,
      },
    };
  }

  return state;
};
