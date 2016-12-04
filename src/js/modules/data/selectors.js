export const getItem = (state, collection, id) =>  state.data[collection] ? state.data[collection][id] : null;
export const getItems = (state, collection, ids) => state.data[collection] ? ids.map(id => getItem(state, collection, id)) : [];
