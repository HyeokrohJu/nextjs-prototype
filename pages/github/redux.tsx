import React, { ReactElement } from 'react';

import Layout from '@components/Layout';
import useUser from '@stores/context/hook';

function User1Info(): ReactElement {
  console.log('User1Info Reload');
  const { user1 } = useUser();
  if (!user1) return <div>사용자 정보가 없습니다.</div>;
  return <div>{user1.username}</div>;
}

function User2Info(): ReactElement {
  console.log('User2Info Reload');
  const { user2 } = useUser();
  if (!user2) return <div>사용자 정보가 없습니다.</div>;
  return <div>{user2.username}</div>;
}

function Authenticate1(): ReactElement {
  console.log('Authenticate1 Reload');
  const { authenticate1 } = useUser();
  const onClick = (): void => {
    authenticate1({ username: 'user1' });
  };
  return <button onClick={onClick}>User1 인증</button>;
}

function Authenticate2(): ReactElement {
  console.log('Authenticate2 Reload');
  const { authenticate2 } = useUser();
  const onClick = (): void => {
    authenticate2({ username: 'user2' });
  };
  return <button onClick={onClick}>User2 인증</button>;
}

export default function CtxApp(): ReactElement {
  return (
    <Layout>
      <User1Info />
      <User2Info />
      <Authenticate1 />
      <Authenticate2 />
    </Layout>
  );
}
