import React from 'react';
import img404 from '@/public/404.svg';
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h3>The page you are looking for is not found!</h3>
      <Image src={img404} alt="404" />
      <Link href="/">Go to Home Page</Link>
    </div>
  )
}

export default NotFound;