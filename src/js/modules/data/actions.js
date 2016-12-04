export const PUSH_ITEM = 'PUSH_ITEM';
export const PUSH_ITEMS = 'PUSH_ITEMS';

export const pushItem = (item, collection) => ({
  type: PUSH_ITEM,
  payload: item,
  meta: {
    collection,
  },
});

export const pushItems = (items, collection) => ({
  type: PUSH_ITEMS,
  payload: items,
  meta: {
    collection,
  },
});
