import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { githubBio, githubState, gitUserProfileRequest } from '@stores/github/reducer';
import { IGithubProfile } from '@apis/github/github.interface';

/**
 * GitHub 정보조회 CustomHook 생성
 *
 * @export
 * @return {*}  {({
 *   loading: any;
 *   error: Error | null;
 *   data: IGithubProfile | null;
 *   gitUser: (username: string) => void;
 * })}
 */
export default function useGithub(): {
  loading: any;
  error: Error | null;
  data: IGithubProfile | null;
  gitUser: (username: string) => void;
  bio: string | undefined;
} {
  const { loading, error, data } = useSelector(githubState);
  const bio = useSelector(githubBio);
  const dispatch = useDispatch();

  const gitUser = useCallback(
    (username: string) => {
      dispatch(gitUserProfileRequest(username));
    },
    [dispatch],
  );

  return { loading, error, data, gitUser, bio };
}
