import React from 'react';
import { GetServerSideProps } from 'next';
import { END } from 'redux-saga';

import wrapper, { SagaStore } from '@stores/store';
import useGithub from '@stores/github/hook';
import { gitUserProfileRequest } from '@stores/github/reducer';
import Layout from '@components/Layout';
import Link from 'next/link';

const WithStaticProps: React.FC = () => {
  const { loading, error, data, gitUser, bio } = useGithub();
  console.log(data);
  console.log(bio);
  const git = (): void => {
    gitUser('velopert');
  };
  return (
    <Layout>
      <button onClick={git}>클릭</button>
      {loading && <p style={{ textAlign: 'center' }}>로딩중..</p>}
      {error && <p style={{ textAlign: 'center' }}>에러 발생!</p>}
      {data && <p>{data.avatar_url}</p>}
      <Link href="/github/context">
        <a>context test</a>
      </Link>
      <Link href="/github/redux">
        <a>redux test</a>
      </Link>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(gitUserProfileRequest('velopert'));
    store.dispatch(END);

    await (store as SagaStore).sagaTask?.toPromise();
  },
);

export default WithStaticProps;
