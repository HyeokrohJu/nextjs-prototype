import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { IGithubProfile } from '@apis/github';
import { IAsyncState, IState } from '@interfaces/asyncState';
import github from '@stores/github';
import ctx from '@stores/context';

/**
 * Root Reducer State Interface
 *
 * @export
 * @interface State
 */
export interface State {
  github: IAsyncState<IGithubProfile>;
  ctx: IState;
}

/**
 * Root Reducer 생성
 *
 * @param {(State | undefined)} [state={} as State]
 * @param {AnyAction} action
 * @return {*}  {State}
 */
const rootReducer = (state: State | undefined = {} as State, action: AnyAction): State => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE');
      return action.payload;

    default: {
      const combineReducer = combineReducers({
        github,
        ctx,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;

/**
 * Root State Type
 */
export type RootState = ReturnType<typeof rootReducer>;
