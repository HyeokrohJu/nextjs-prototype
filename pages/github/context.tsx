import Layout from '@components/Layout';
import { IState, IUser } from '@interfaces/asyncState';
import React, { createContext, useState, useContext, ReactElement } from 'react';

const UserContext = createContext<IState>({
  user1: { username: '' },
  user2: { username: '' },
  setUser1: () => {
    return null;
  },
  setUser2: () => {
    return null;
  },
});

function UserProvider({ children }: any): ReactElement {
  const [user1, setUser1] = useState<IUser>({ username: '' });
  const [user2, setUser2] = useState<IUser>({ username: '' });
  return (
    <UserContext.Provider value={{ user1, user2, setUser1, setUser2 }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser(): IState {
  return useContext(UserContext);
}

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
  const { setUser1 } = useUser();
  const onClick = (): void => {
    if (setUser1) {
      setUser1({ username: 'user1' });
    }
  };
  return <button onClick={onClick}>User1 인증</button>;
}

function Authenticate2(): ReactElement {
  const { setUser2 } = useUser();
  const onClick = (): void => {
    if (setUser2) {
      setUser2({ username: 'user2' });
    }
  };
  return <button onClick={onClick}>User2 인증</button>;
}

export default function CtxApp(): ReactElement {
  return (
    <Layout>
      <UserProvider>
        <User1Info />
        <User2Info />
        <Authenticate1 />
        <Authenticate2 />
      </UserProvider>
    </Layout>
  );
}
