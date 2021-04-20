import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { User } from '../../interfaces';
import { sampleUserData } from '../../utils/sample-data';
import List from '../../components/List';
import Layout from '../../components/Layout';

const WithStaticProps: React.FC = ({ items }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout>
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List items={items}></List>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData;
  return { props: { items } };
};

export default WithStaticProps;
