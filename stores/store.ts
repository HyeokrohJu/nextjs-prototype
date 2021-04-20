import { Store } from 'redux';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import createSagaMiddleware, { Task } from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from '@stores/rootReducer';
import rootSaga from '@stores/rootSaga';

/**
 * Development Mode 확인
 */
const devMode = process.env.NODE_ENV === 'development';

/**
 * Redux SAGA Store Interface
 *
 * @export
 * @interface SagaStore
 * @extends {Store}
 */
export interface SagaStore extends Store {
  sagaTask?: Task;
}

/**
 * Store 생성
 *
 * @return {*}  {EnhancedStore}
 */
const store = (): EnhancedStore => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    devTools: devMode,
  });

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

/**
 * Redux Wrapper 생성
 */
const wrapper = createWrapper(store, {
  debug: devMode,
});

export default wrapper;
