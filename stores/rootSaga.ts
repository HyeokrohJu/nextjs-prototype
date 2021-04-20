import { all, AllEffect, fork, ForkEffect } from 'redux-saga/effects';
import { githubSaga } from '@stores/github';

/**
 * Root Saga 생성
 *
 * @export
 * @return {*}  {Generator<AllEffect<ForkEffect<void>>, void, unknown>}
 */
export default function* rootSaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
  yield all([fork(githubSaga)]);
}
