import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IGithubProfile } from '@apis/github';
import { IAsyncState } from '@interfaces/asyncState';
import { RootState } from '@stores/rootReducer';

/**
 * 기본 State 생성
 */
const initialState: IAsyncState<IGithubProfile> = {
  loading: false,
  error: null,
  data: null,
};

/**
 * Redux-Toolkit Slice 생성
 */
const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    gitUserProfileRequest: (state: IAsyncState<IGithubProfile>, _action: PayloadAction<string>) => {
      state.loading = true;
      state.error = null;
    },
    gitUserProfileSuccess: (
      state: IAsyncState<IGithubProfile>,
      action: PayloadAction<IGithubProfile>,
    ) => {
      state.loading = false;
      state.data = action.payload;
    },
    gitUserProfileFailure: (state: IAsyncState<IGithubProfile>, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = githubSlice;
export const { gitUserProfileRequest, gitUserProfileSuccess, gitUserProfileFailure } = actions;

export const githubState = (state: RootState): IAsyncState<IGithubProfile> => state.github;

export const githubBio = createSelector(githubState, github => {
  return github.data?.bio;
});

export default reducer;
