import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IState, IUser } from '@interfaces/asyncState';
import { RootState } from '@stores/rootReducer';

/**
 * 기본 State 생성
 */
const initialState: IState = {
  user1: { username: '' },
  user2: { username: '' },
};

/**
 * Redux-Toolkit Slice 생성
 */
const ctxSlice = createSlice({
  name: 'ctx',
  initialState,
  reducers: {
    setReduxUser1: (state: IState, action: PayloadAction<IUser>) => {
      state.user1.username = action.payload.username;
    },
    setReduxUser2: (state: IState, action: PayloadAction<IUser>) => {
      state.user2.username = action.payload.username;
    },
  },
});

const { reducer, actions } = ctxSlice;
export const { setReduxUser1, setReduxUser2 } = actions;

export const ctxState = (state: RootState): IState => state.ctx;

export default reducer;
