import Link from 'next/link';
import styles from './page.module.css';

const Home = () => {
  return (
    <div className={styles.page}>
      <h1>Hello Next JS</h1>
      <nav>
        <Link href="/about">About US</Link>
        <Link href="/contact">Contact US</Link>
      </nav>
      <p>This is is the first next js app</p>
    </div>
  );
}

export default Home;