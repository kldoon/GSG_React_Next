import Link from 'next/link';
import styles from './page.module.css';

const Home = () => {
  return (
    <div className={styles.page}>
      <h1>Hello Next JS</h1>
      <p>This is is the first next js app</p>
      <div className="mt-10 flex flex-col">
        <h2>Latest News</h2>
        <ul className='flex gap-x-2.5'>
          <li>
            <Link href="/news/gaza">Gaza News</Link>
          </li>
          <li>
            <Link href="/news/westbank">Westbank News</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;