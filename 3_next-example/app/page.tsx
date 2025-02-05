import Link from 'next/link';
import styles from './page.module.css';

const Home = () => {
  return (
    <div className={styles.page}>
      <h1>Hello Next JS</h1>
      <p>This is is the first next js app</p>
      <div className="mt-1">
        <h2>Latest News</h2>
        <ul>
          <li>
            <Link href="/news/gaza">Gaza News</Link>
            <Link href="/news/westbank">Westbank News</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;