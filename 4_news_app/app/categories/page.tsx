import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div>
      <h1>Categories Page</h1>
      <ul>
        <li>
          <Link href="/news-list/sports/us">US Sports</Link>
        </li>
        <li>
          <Link href="/news-list/sports/gb">UK Sports</Link>
        </li>
        <li>
          <Link href="/news-list/politics/us">US Politics</Link>
        </li>
        <li>
          <Link href="/news-list/politics/gb">UK Politics</Link>
        </li>
        <li>
          <Link href="/news-list/business/us">US Business</Link>
        </li>
        <li>
          <Link href="/news-list/business/gb">UK Business</Link>
        </li>
      </ul>
    </div>
  )
}

export default Page;