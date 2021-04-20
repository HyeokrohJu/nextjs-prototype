import Link from 'next/link';
import styles from './test.module.scss';

const IndexPage: React.FC = () => (
  <>
    <h1>Hello Next.js </h1>
    <p>
      <Link href="/about">
        <a className={styles.container}>About</a>
      </Link>
    </p>
  </>
);

export default IndexPage;
