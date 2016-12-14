import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const getPersistedState = () => {
  if (!localStorage.getItem('redux-state-v1.2')) {
    return {};
  }

  try {
    return JSON.parse(localStorage.getItem('redux-state-v1.2'));
  } catch(e) {
    return {};
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()

export default () => {
  const store = createStore(
    rootReducer,
    getPersistedState(),
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(browserHistory)
      )
    )
  );

  store.subscribe(() => {
    localStorage.setItem('redux-state', JSON.stringify(store.getState()));
  })
  sagaMiddleware.run(rootSaga);

  return store;
};
