import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IUser } from '@interfaces/asyncState';
import { ctxState, setReduxUser1, setReduxUser2 } from './reducer';

export default function useUser(): {
  user1: IUser;
  user2: IUser;

  authenticate1: (user: IUser) => void;
  authenticate2: (user: IUser) => void;
} {
  const { user1, user2 } = useSelector(ctxState);
  const dispatch = useDispatch();

  const authenticate1 = useCallback(
    (user: IUser) => {
      dispatch(setReduxUser1(user));
    },
    [dispatch],
  );

  const authenticate2 = useCallback(
    (user: IUser) => {
      dispatch(setReduxUser2(user));
    },
    [dispatch],
  );

  return { user1, user2, authenticate1, authenticate2 };
}
