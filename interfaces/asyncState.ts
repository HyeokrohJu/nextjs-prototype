/**
 * Async State Interface
 *
 * @export
 * @interface IAsyncState
 * @template T
 */
export interface IAsyncState<T> {
  loading: boolean;
  error: Error | null;
  data: T | null;
}

export interface IUser {
  username: string;
}

export interface IState {
  user1: IUser;
  user2: IUser;

  setUser1?: (user: IUser) => void;
  setUser2?: (user: IUser) => void;
}
