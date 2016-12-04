import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const getPersistedState = () => {
  if (!localStorage.getItem('redux-state')) {
    return {};
  }

  try {
    return JSON.parse(localStorage.getItem('redux-state'));
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
        createLogger(),
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
